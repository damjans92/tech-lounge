function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="bg-neutral-100">
      <div className="container mx-auto h-[100px] ">
        <div className="flex items-center justify-center h-full font-thin">
          <p className="sm:text-[1.15rem] px-6 text-center">
            © Copyright {date} TechLounge. Developed by Damjan Savkovic
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
