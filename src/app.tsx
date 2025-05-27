import { useState } from 'react';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Zëvendëso me thirrje reale në API për kërkim imazhesh
    // Shembull: fetch(`https://api.unsplash.com/search/photos?query=${searchQuery}`)
    //          .then(res => res.json())
    //          .then(data => setSearchResults(data.urls));
    setSearchResults([
      'https://source.unsplash.com/featured/?albania',
      'https://source.unsplash.com/featured/?language',
      'https://source.unsplash.com/featured/?culture',
      'https://source.unsplash.com/featured/?albanian',
    ]);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-xl rounded-xl transition-all duration-300 hover:shadow-2xl relative flex flex-col bg-fixed">
      {/* Left Half: Forum Header */}
      <div className="w-full">
        <header className="text-center mb-8 bg-[url('data:image/svg+xml;utf8,%3Csvg%20width%3D%22700%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Crect%20width%3D%22700%22%20height%3D%22500%22%20fill%3D%22%23f00%22%2F%3E%0A%20%20%3Cpath%20id%3D%22half%22%20d%3D%22m300.094%2C97.2043c-4.8618-0.082-12.9308%2C1.54998-12.75%2C5.2812-13.5419-2.32092-14.952%2C3.27267-14.1562%2C8.25003%2C1.28844-1.97532%2C2.85723-3.04776%2C4.06251-3.24999%2C1.80576-0.2997%2C3.6954%2C0.2835%2C5.625%2C1.46871%2C1.92969%2C1.1853%2C4.05558%2C3.09798%2C5.00004%2C4.28121-4.77945%2C1.14264-8.4717%2C0.405-12.2188-0.2502-1.84716-0.3231-4.43205-1.36224-5.96871-2.43747-1.53666-1.07541-2.0205-2.08755-4.43754-4.56246-2.84967-2.91798-5.88258-2.09637-4.93749%2C2.43747%2C2.18556%2C4.21092%2C5.83659%2C6.08859%2C10.4375%2C6.84378%2C2.214%2C0.3636%2C5.51196%2C1.15263%2C9.25%2C1.15623%2C3.73806%2C0.004%2C7.93521-0.54%2C10.2188-0.0625-1.37187%2C0.8613-2.92428%2C2.34621-6.00003%2C2.93751-3.12777%2C0.6012-7.88301-1.85994-10.7812-2.53125%2C0.3681%2C2.43855%2C3.44403%2C4.71816%2C9.49999%2C5.90625%2C9.95152%2C2.16693%2C18.2208%2C3.81375%2C23.6875%2C6.78123%2C5.46669%2C2.96748%2C8.91342%2C6.68268%2C11.375%2C9.59375%2C4.89861%2C5.79312%2C5.15628%2C10.2402%2C5.46876%2C11.2187%2C1.00782%2C9.2557-2.21958%2C14.4622-8.21871%2C16.0625-2.99961%2C0.8001-8.32788-0.7065-10.2812-2.99997-1.95345-2.29293-3.85407-6.23421-3.31254-12.4062%2C0.5265-2.42127%2C3.29526-8.72811%2C0.93753-10.0312-10.8616-6.00326-24.0512-12.0744-33.5938-15.6873-2.60815-0.98745-4.75675%2C2.55735-5.59375%2C3.9375-16.2111-1.97418-30.827-12.9443-37.4062-24.625-4.48101-7.95555-11.8665%2C0.0164-10.625%2C7.5312%2C2.0043%2C8.38764%2C8.39502%2C14.4519%2C16.0625%2C18.75%2C7.86951%2C4.33314%2C17.7059%2C8.59698%2C27.6562%2C8.37504%2C5.36067%2C1.01412%2C5.30775%2C7.94943-1.125%2C9.24999-12.5809%2C0.0796-22.6175-0.234-32.0938-9.375-7.18776-6.5628-11.2342%2C1.25694-9.15624%2C5.68746%2C3.52134%2C13.6583%2C23.0063%2C17.483%2C42.7187%2C13.0625%2C7.63344-1.26414%2C3.06252%2C6.91542%2C0.90621%2C7.00002-8.23662%2C5.90562-22.9827%2C11.6841-35.9688-0.0625-5.94243-4.55022-9.96016-0.7254-7.74999%2C5.84379%2C5.76216%2C17.1274%2C27.8037%2C13.5302%2C42.9375%2C5.09373%2C3.89529-2.17143%2C7.43049%2C2.88045%2C2.68749%2C6.71877-18.8201%2C13.1503-28.2298%2C13.2999-36.7187%2C8.24998-10.6275-4.1913-11.5623%2C7.59637-5.25%2C11.4688%2C7.01595%2C4.30398%2C24.8701%2C1.07703%2C37.9688-7.15626%2C5.61537-4.17483%2C5.86944%2C2.35305%2C2.31246%2C4.93749-15.5442%2C13.4334-21.671%2C16.971-37.875%2C14.7812-8.03511-0.6264-7.91442%2C9.2799-1.59372%2C13.1562%2C8.62983%2C5.29245%2C25.4827-3.49245%2C38.5625-14.3438%2C5.50521-2.94165%2C6.40935%2C1.88271%2C3.68748%2C7.59375-7.99209%2C10.0832-15.4932%2C16.0281-22.7187%2C18.7812-7.22556%2C2.75319-14.1755%2C2.31453-19.0938%2C0.6246-6.00021-2.06145-6.75261%2C4.17429-3.43746%2C9.84375%2C1.99836%2C3.41748%2C10.2797%2C4.51332%2C19.2187%2C1.34379%2C8.93907-3.16908%2C18.5358-10.6026%2C25.125-19.3125%2C5.73291-5.01894%2C5.01993%2C1.72368%2C2.40624%2C6.46875-13.1944%2C20.8587-25.262%2C28.5963-41.1562%2C27.2812-7.04754-1.19673-8.6481%2C4.28364-4.1562%2C9.34375%2C7.88742%2C6.54111%2C17.7493%2C6.336%2C26.375-0.1251%2C7.66818-7.39323%2C22.3379-23.3134%2C30.0312-31.8438%2C5.42133-4.32189%2C7.1532-0.0612%2C5.56254%2C8.71875-1.44666%2C5.02803-5.06826%2C10.3234-14.9375%2C14.1875-6.74226%2C3.84804-1.67904%2C9.15142%2C3.375%2C9.25%2C2.78136%2C0.0542%2C8.42922-3.19716%2C12.75-8.06247%2C5.68422-6.40053%2C6.02226-10.6976%2C9.15625-20.6562%2C2.96091-4.85442%2C8.24949-2.58858%2C8.25003%2C2.50002-2.53647%2C9.97519-4.71582%2C11.7638-9.84375%2C15.8438-4.90482%2C4.60494%2C3.41523%2C6.13962%2C6.21873%2C4.24998%2C8.11044-5.46678%2C11.0713-12.5383%2C13.7812-18.9688%2C1.95606-4.64166%2C7.63038-2.39148%2C5.00004%2C5.18751-6.28605%2C18.1128-16.6152%2C25.2447-34.6875%2C28.9062-1.83159%2C0.3258-2.94876%2C1.40661-2.31246%2C3.53124%2C2.42559%2C2.51811%2C4.85559%2C4.80303%2C7.28127%2C7.3125-11.1751%2C3.25377-20.2541%2C5.08171-31.4377%2C8.34421-5.48685-3.59721-9.9194-6.64909-15.4062-10.25-1.44684-3.38229-2.12149-8.54505-10.2188-4.90626-5.48685-2.53413-8.01783-1.60488-11.0625%2C0.93753%2C4.39542%2C0.1638%2C6.30783%2C1.34091%2C8.03124%2C3.34377%2C2.25009%2C5.92614%2C7.43877%2C6.49863%2C12.75%2C4.81248%2C3.45528%2C2.91078%2C5.29542%2C5.1435%2C8.74998%2C8.06247-6.44922-0.2205-10.9422-0.3348-17.375-0.531-6.1407-6.5934-11.042-6.23223-15.4375-1.06245-3.35007%2C0.5148-4.77018%2C0.5868-7.06248%2C4.65624%2C3.60513-1.4796%2C5.87322-1.92312%2C7.43751-0.3123%2C6.52869%2C3.78495%2C10.7938%2C2.94012%2C14.0313%2C0%2C6.29874%2C0.3852%2C11.9746%2C0.711%2C18.2812%2C1.125-2.3166%2C1.96911-5.49585%2C3.01365-7.81254%2C5.00004-9.4603-2.70648-14.3979%2C0.93663-16.0625%2C8.65629-1.26783%2C3.11571-1.86147%2C6.32349-1.31247%2C9.65626%2C0.91566-3.04839%2C2.38788-5.66937%2C5.09373-7.3125%2C8.43201%2C2.14182%2C11.6026-1.3005%2C12.0625-6.34374%2C4.06449-3.31632%2C10.1935-4.04766%2C14.25-7.40628%2C4.743%2C1.51839%2C7.03575%2C2.45889%2C11.8125%2C3.96873%2C1.6983%2C5.16078%2C5.5413%2C7.20423%2C11.7812%2C5.87502%2C7.42797%2C0.2331%2C6.11667%2C3.28095%2C6.71877%2C5.71878%2C1.97406-3.50109%2C1.91907-6.90588-2.65626-10-1.66464-4.52241-5.35275-6.57918-10.1875-3.96873-4.55094-1.29204-5.7474-3.1491-10.2812-4.43754%2C11.4681-3.65526%2C19.603-4.47777%2C31.0625-8.12502%2C2.86848%2C2.70585%2C5.14188%2C4.64841%2C8.03124%2C7.06248%2C1.5228%2C0.90891%2C2.98053%2C1.13787%2C3.87504%2C0%2C7.18083-10.3932%2C10.3879-19.5528%2C17.0625-26.4062%2C2.54997-2.83554%2C5.77161-6.66135%2C9.34375-7.59375%2C1.78605-0.4662%2C3.97638-0.1818%2C5.37498%2C1.34379%2C1.3986%2C1.52541%2C2.49723%2C4.33683%2C2.0313%2C8.53128-0.6687%2C6.02082-2.12337%2C7.9218-3.81249%2C11.5312-1.68912%2C3.60954-3.75336%2C5.82975-5.87502%2C8.59374-4.24341%2C5.52789-9.8424%2C8.74539-13.1562%2C10.9062-6.62769%2C4.3218-9.43073%2C2.43027-14.5625%2C2.15622-6.63273%2C0.7443-8.39754%2C3.97467-2.96874%2C8.4375%2C5.07492%2C2.64051%2C9.63652%2C2.96649%2C13.3438%2C2.28123%2C3.18312-0.5886%2C6.90831-4.6971%2C9.5625-6.90624%2C2.98764-3.4515%2C7.94097%2C0.6417%2C4.56246%2C4.65624-6.13935%2C7.29477-12.2738%2C12.1044-19.8438%2C12-7.95465%2C1.07055-6.46668%2C5.54004-1.18746%2C7.71876%2C9.50117%2C3.92121%2C18.0796-3.42351%2C22.4375-8.25003%2C3.36222-3.67839%2C5.75028-3.82185%2C5.15628%2C1.87497-3.33783%2C10.3136-7.89912%2C14.2977-15.3438%2C14.8125-6.03855-0.5607-6.1038%2C4.10058-1.6875%2C7.25004%2C10.0603%2C6.96321%2C17.3459-4.89474%2C20.75-12.0625%2C2.42568-6.46569%2C6.14619-3.39093%2C6.5313%2C1.93752%2C0.0502%2C7.11936-3.16674%2C12.9321-11.7812%2C20.2187%2C6.59115%2C10.5015%2C14.2752%2C21.1829%2C20.8749%2C31.7188l20.005-222.806-20-35.202c-2.08305-1.92312-9.12777-10.223-10.9686-11.375-0.6714-0.7173-1.07973-1.22409-0.0936-1.59372%2C0.95364-0.3573%2C3.18591-0.7578%2C4.68747-1.03122-4.2417-4.2489-7.87662-5.61159-15.9065-7.93728%2C1.95687-0.8334%2C3.86037-0.3483%2C9.625-0.6246-2.2886-3.24868-7.40028-8.22482-14-10.6254%2C4.35852-3.09852%2C5.20785-3.30617%2C9.53126-6.93749-7.48656-0.531-13.8798-1.95712-20.3125-3.90625-4.06692-1.90161-9.71539-3.51615-12.4687-3.56251zm0.7191%2C8.71875c3.95622%2C0%2C6.40629%2C1.35612%2C6.40629%2C2.99997%2C0%2C1.67238-2.45007%2C3.03129-6.40629%2C3.03129-3.93975%2C0-6.43752-1.48293-6.43752-3.15621%2C0.00071-1.64385%2C2.49777-2.87505%2C6.43752-2.87505z%22%20fill%3D%22%23000%22%2F%3E%0A%3C%2Fsvg%3E')] bg-cover bg-center text-gray-900 shadow-xl rounded-xl transition-all duration-300 hover:shadow-2xl relative flex flex-col bg-fixed">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">
            Forumi i Lirë i Gjuhës Shqipe
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Relaksoni, ndani tipet dhe ndihmoni të gjithë bashkë!
          </p>
        </header>
      </div>

      {/* Right Half: Forum Content */}
      <div className="w-full">
        {/* Left Icon Navigation Sidebar */}
        <nav className="fixed top-0 left-4 h-screen w-16 flex flex-col justify-start items-center space-y-8 z-40">
          <a href="#articles" className="text-amber-600 hover:text-amber-800 transition-all">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </a>
          <a href="#topics" className="text-amber-600 hover:text-amber-800 transition-all">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </a>
          <a href="#about" className="text-amber-600 hover:text-amber-800 transition-all">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </a>
          <a href="#guidelines" className="text-amber-600 hover:text-amber-800 transition-all">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
            </svg>
          </a>
          <a href="#contact" className="text-amber-600 hover:text-amber-800 transition-all">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </a>
          <a href="#images" className="text-amber-600 hover:text-amber-800 transition-all">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </a>
        </nav>

        <section id="articles" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-1 bg-amber-100 px-3 py-1 rounded-lg inline-block">
            Artikuj Të Veçanta
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-amber-800">Gjuha Shqipe në Europë</h3>
              <p className="text-gray-600 mt-2">Analiza e historisë dhe pozicionit të gjuhës shqipe në kontekstin europian.</p>
              <p className="text-sm text-gray-500 mt-2">Shkruar nga: Liridh Krasniqi</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-amber-800">Gjuha Shqipe në Shkollë</h3>
              <p className="text-gray-600 mt-2">Diskutim i rëndësisë së mësimdhënies së gjuhës shqipe në shkollë.</p>
              <p className="text-sm text-gray-500 mt-2">Shkruar nga: Ermal Hoxha</p>
            </div>
          </div>
        </section>

        <section id="topics" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-1 bg-amber-100 px-3 py-1 rounded-lg inline-block">
            Temat më Popullore
          </h2>
          <ul className="space-y-3">
            <li className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-amber-800">Gjuha Shqipe në Media</h3>
              <p className="text-gray-600">Diskutim i përdorimit të gjuhës shqipe në televizion, gazeta dhe internet.</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-amber-800">Gjuha Shqipe në Literaturë</h3>
              <p className="text-gray-600">Roli i gjuhës shqipe në zhvillimin e literaturës kombëtare.</p>
            </li>
          </ul>
        </section>

        <section id="about" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-1 bg-amber-100 px-3 py-1 rounded-lg inline-block">
            Rreth këtij Forumi
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Forumi i Gjuhës Shqipe është një platformë e lirë për të gjithë ata që janë të interesuar në gjuhën shqipe. Qëllimi ynë është të promovojmë përdorimin e gjuhës shqipe në jetën e përditshme, në arsim dhe në kulturë.
          </p>
        </section>

        <section id="guidelines" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-1 bg-amber-100 px-3 py-1 rounded-lg inline-block">
            Rregullat e Komunitetit
          </h2>
          <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
            <li>Respektoni të gjithë anëtarët.</li>
            <li>Shkruani në gjuhën shqipe.</li>
            <li>Evitoni fjalët që mund të shkaktojnë konflikt.</li>
            <li>Respektoni rregullat e forumit.</li>
          </ul>
        </section>

        <section id="contact" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-1 bg-amber-100 px-3 py-1 rounded-lg inline-block">
            Na kontaktoni
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Emri
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Emri juaj"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Email juaj"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Tema
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Tema"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mesazhi
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Mesazhi juaj"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Dërgo mesazhin
              </button>
            </div>
          </form>
        </section>

        <section id="images" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-1 bg-amber-100 px-3 py-1 rounded-lg inline-block">
            Kërko Imazhe
          </h2>
          <form onSubmit={handleSearch} className="mb-4">
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Kërko imazhe..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Kërko
              </button>
            </div>
          </form>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {searchResults.length > 0 ? (
              searchResults.map((url, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={url}
                    alt={`Rezultat kërkimi ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500">Nuk u gjetën imazhe. Provoni një term tjetër kërkimi.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
