function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-96 h-96 bg-[url(/public/livro.png)] bg-cover mb-8"></div>
      <div className="text-lg py-8 px-16 bg-white mt-8 rounded-md shadow-md">
        <p className="text-center text-2xl font-bold mb-4">Bem-vindo ao Reading Journal!</p>
        <p>Aqui você pode registrar, organizar e acompanhar suas leituras de forma simples e eficiente.</p>
        <p>Transforme sua jornada literária em uma experiência ainda mais envolvente!</p>
      </div>
    </div>
  );
}

export default Home;
