"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Match worker version automatically
pdfjs.GlobalWorkerOptions.workerSrc =
  `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PdfViewerComponent() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="w-full flex flex-col items-center">
      <Document
        file="/resume.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<p className="text-gray-500">Loading resume...</p>}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <div
            key={`page_${index + 1}`}
            className="mb-8 border border-gray-200 shadow-sm rounded-lg overflow-hidden"
          >
            <Page
              pageNumber={index + 1}
              width={900}
            />
          </div>
        ))}
      </Document>
    </div>
  );
}
