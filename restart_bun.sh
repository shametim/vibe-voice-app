#!/bin/bash

# Trap and ignore SIGHUP for this script
trap '' HUP

# Kill any existing 'bun dev' process gracefully
pkill -f "bun dev" || true  # Use || true to avoid script failure if no process is found

# Start the new process with nohup and disown to fully detach
nohup sudo bun --hot app.ts > output.log 2>&1 & disown

echo "Restarted bun dev at $(date)" >> restart.log