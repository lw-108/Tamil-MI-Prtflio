"use client";

import dynamic from "next/dynamic";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

const PDFViewer = dynamic(() => import("./PdfViewerComponent"), {
  ssr: false,
});

export default function ResumePage() {
  return (
    <div className="bg-white min-h-screen flex flex-col overflow-x-hidden">
      <Container className="flex-1 px-4 md:px-10 py-20">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
              My Resume
            </h1>
            <a
              href="/resume.pdf"
              download="resume.pdf"
              aria-label="Download my resume"
              className="px-4 py-2 bg-black text-white rounded-full hover:bg-blue-600"
            >
              ↡
            </a>
          </div>

          <p className="text-gray-600 mt-3">
            View or download my professional resume below.
          </p>
        </header>

        <div className="w-full flex justify-center">
          <PDFViewer />
        </div>
      </Container>

      <Footer />
    </div>
  );
}
