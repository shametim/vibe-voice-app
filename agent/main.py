from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from aider.coders import Coder
from aider.models import Model
from aider.io import InputOutput
from fastapi.middleware.cors import CORSMiddleware
import threading
import queue
import aider.analytics as analytics_module

message_sent_event = threading.Event()

class CustomAnalytics(analytics_module.Analytics):
    def event(self, event_name, **kwargs):
        super().event(event_name, **kwargs)  # Call the original if needed
        if event_name == "message_send":
            print("Coder is done! Handling custom event.")
            message_sent_event.set()  # Signal that the message was sent

custom_analytics = CustomAnalytics()  # Instantiate your custom class


app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# This is a list of files to add to the chat
fnames = ["../src/app.tsx", "../src/styles.css"]

model = Model("openrouter/qwen/qwen3-32b", )
io = InputOutput(yes=True)

# Create a coder object once at startup
coder = Coder.create(main_model=model, fnames=fnames, io=io, stream=False, map_tokens=0, analytics=custom_analytics)

class RunRequest(BaseModel):
    instruction: str

# Queue and lock for sequential execution
instruction_queue = queue.Queue()
lock = threading.Lock()

# Background worker to process the queue
def process_queue():
    while True:
        try:
            instruction = instruction_queue.get()
            if instruction is None:
                break
            with lock:
                coder.run(instruction + ' do not create new files. you must use tailwind.')
                coder.run('/clear')
                message_sent_event.wait()  # Wait for the message to be sent
                message_sent_event.clear()  # Reset the event for next use
            instruction_queue.task_done()
        except Exception as e:
            print(f"Error processing instruction: {e}")
            instruction_queue.task_done()

# Start the background thread when the app starts
thread = threading.Thread(target=process_queue, daemon=True)
thread.start()

@app.get("/")
def read_root():
    return {"status": "Martin Coder API is running"}

@app.post("/run")
def run_coder(request: RunRequest):
    try:
        instruction_queue.put(request.instruction)
        return {"status": "Command queued", "instruction": request.instruction}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
