"use client";

import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Auto-match worker version
pdfjs.GlobalWorkerOptions.workerSrc =
  `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PdfViewerComponent() {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    const updateWidth = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        // 📱 Mobile → full width
        setPageWidth(screenWidth);
      } else {
        // 💻 Desktop → wide but controlled
        setPageWidth(Math.min(screenWidth * 0.85, 1200));
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="w-full flex justify-center overflow-hidden">
      <div className="w-full max-w-7xl px-0 sm:px-4">
        <Document
          file="/resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <p className="text-center text-gray-500 py-10">
              Loading resume...
            </p>
          }
        >
          {numPages &&
            Array.from(new Array(numPages), (_, index) => (
              <div
                key={`page_${index + 1}`}
                className="mb-10 shadow-xl rounded-xl overflow-hidden bg-white"
              >
                <Page
                  pageNumber={index + 1}
                  width={pageWidth}
                />
              </div>
            ))}
        </Document>
      </div>
    </div>
  );
}
