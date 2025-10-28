import BackToDashBoardLink from "@/components/back-to-dashboard-link";

export default function TutorialHelloWorld() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <BackToDashBoardLink></BackToDashBoardLink>

      <article className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-md space-y-6">
        {/* Quest Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 border-b pb-2 mb-6">
          Quest: The Oracle&apos;s First Greeting - Whispering &quot;Hello World&quot;
        </h1>
        {/* Flavor Text*/}
        <p className="text-lg italic text-gray-600">
          Welcome, brave coder! Your journey into the mystical lands of programming begins now.
          Before you can conjure complex spells or build mighty digital fortresses, every adventurer
          must learn the first incantation, the universal greeting recognized across all realms:{" "}
          <strong className="font-semibold text-indigo-600">&quot;Hello World&quot;</strong>. This
          simple phrase is your key to unlocking the power of code.
        </p>
        <p className="text-gray-700">
          This quest will guide you through understanding and wielding this fundamental magic.
        </p>

        <hr className="my-6" />
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">
            What is this &quot;Hello World&quot; Sorcery?
          </h2>
          <p className="text-gray-700">
            In the ancient scrolls of programming, &quot;Hello World&quot; is the traditional first
            spell learned. What does it do? It simply commands the machine - your loyal golem - to
            display the message{" "}
            <code className="bg-gray-100 px-1 rounded text-indigo-700">
              &quot;Hello World!&quot;
            </code>{" "}
            on the screen.
          </p>
          <p className="text-gray-700">
            Think of it like teaching a parrot its first words. You&apos;re not asking it to recite
            poetry yet, just to say &quot;Hello!&quot; It&apos;s the basic proof that you can
            communicate your intentions to the machine and make it respond.
          </p>
        </section>

        <hr className="my-6" />
        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">Why This First Greeting Matters</h2>
          <p className="text-gray-700">Why start with something so simple?</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
            <li>
              <strong className="font-semibold">It&apos;s Tradition:</strong> Like a knight
              receiving their first sword, programmers worldwide start here. It connects you to
              generations of coders before you!
            </li>
            <li>
              <strong className="font-semibold">It&apos;s a Test:</strong> Successfully making the
              machine say &quot;Hello World&quot; proves your basic setup is working. Your coding
              environment, the language you&apos;re using - they&apos;re all aligned and ready for
              more complex commands. It&apos;s like checking if your magic wand sparks before trying
              to levitate a mountain.
            </li>
            <li>
              <strong className="font-semibold">It&apos;s Confidence:</strong> Seeing your very
              first command come to life, even a simple one, is a powerful boost! It&apos;s the
              first step on your epic journey.
            </li>
          </ul>
        </section>
        <hr className="my-6" />
        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">
            Visualizing the Incantation (Conceptual Example)
          </h2>
          <p className="text-gray-700">
            Imagine you have a magical scroll (your program). To perform the &quot;Hello World&quot;
            greeting, you&apos;d write an instruction similar to this:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-800 overflow-x-auto">
            <code>{`// Command the Oracle (or Screen) to speak:\nDisplay: "Hello World!"`}</code>
          </pre>
          <p className="text-gray-700">
            Different programming languages (spellbooks) have slightly different words for the
            &apos;Display&apos; command (like{" "}
            <code className="bg-gray-100 px-1 rounded text-indigo-700">print</code>,{" "}
            <code className="bg-gray-100 px-1 rounded text-indigo-700">console.log</code>,{" "}
            <code className="bg-gray-100 px-1 rounded text-indigo-700">echo</code>), but the core
            idea is the same: tell the machine to show those exact words.
          </p>
        </section>
        <hr className="my-6" />
      </article>
    </div>
  );
}
