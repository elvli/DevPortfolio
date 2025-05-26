import resume from "../Assets/Elven-Li-Resume.pdf";

export default function ResumeViewer() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold mb-4">My Resume</h1>
      <iframe
        src={resume}
        title="Elven Li Resume"
        className="w-full max-w-4xl h-[80vh] border rounded shadow-lg"
      />
      <a
        href={resume}
        download="Elven-Li-Resume.pdf"
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </div>
  );
}
