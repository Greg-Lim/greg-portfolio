export function About() {
  return (
    <div className="flex flex-col gap-8 mx-auto">
      <section>
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm a CS undergrad from NTU who geeks out on distributed systems and
          advanced algorithms. From keeping TikTok's backend humming with Go to
          coding Nixie clocks and solving Hangman with Rust , I love building
          things that are as efficient as they are complex. Whether I'm
          optimizing a DBMS or competing in hackathons, I'm always looking for a
          new "impossible" problem to solve.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Skills & Technologies</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Frontend</h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-1">
              <li>React & TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Vite</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Backend</h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-1">
              <li>Node.js</li>
              <li>Database Design</li>
              <li>REST APIs</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">What I Love</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm drawn to projects that challenge me to think creatively and solve
          complex problems. I enjoy collaborating with others, learning new
          technologies, and staying updated with the latest trends in web
          development. Outside of coding, I love exploring new ideas and sharing
          knowledge with the developer community.
        </p>
      </section>
    </div>
  );
}
