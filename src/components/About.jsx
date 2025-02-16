const About = () => {
  return (
    <div>
      <div
        className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden'
        id='about'
      >
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>
              About Me
            </h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              🚀 **Software Engineer | AI & Backend Systems | Hackathon Champion**
              <br />
              I specialize in **backend systems, AI-driven applications, and scalable cloud architectures**, 
              with hands-on experience building high-performance web apps, machine learning models, and real-time services.
              <br />
              <br />
              **💡 What I Do Best:**  
              <ul className='list-disc ml-5'>
                <li>🚀 **Backend & Cloud Engineering:** Optimized RESTful APIs & microservices, reducing response times by **30%**.</li>
                <li>🔍 **AI & Machine Learning:** Developed **PhishTor**, an AI-driven phishing detection tool with **95% accuracy**.</li>
                <li>🌍 **Full-Stack Development:** Built **CitySync**, a Firebase-powered civic services app handling **1,000+ real-time requests per sec**.</li>
                <li>📈 **Blockchain & Distributed Systems:** Created **LedgerLock**, a fraud detection system that cut financial fraud risks by **25%**.</li>
              </ul>
              <br />
              **🏆 Why Work With Me?**  
              - **Proven Results:** 4+ hackathon wins, projects adopted by real users.  
              - **AI + Backend Expertise:** I combine **AI-driven automation** with **scalable backend solutions**.  
              - **Open-Source Contributor:** I actively contribute to projects that **impact global developer communities**.  
              <br />
              💡 **Let’s connect & innovate together!**
            </p>

            <ButtonLink
              url='https://drive.google.com/drive/folders/1jRDaNa528SPPAPvhZQ8vgf7dt2-u12_p?usp=drive'
              text='📄 View My Resume'
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
