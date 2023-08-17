import Request from "../helpers/RequestHelper";

export default async function openPdf() {
  const res = await Request("post", "/download-pdf/");
  console.log(res);

  if (res && res.data && res.data.pdf_base64) {
    const binaryData = atob(res.data.pdf_base64);

    // Create a Blob from the binary data
    const blob = new Blob(
      [new Uint8Array([...binaryData].map((char) => char.charCodeAt(0)))],
      { type: "application/pdf" }
    );

    // Create a Blob URL for the Blob
    const pdfUrl = URL.createObjectURL(blob);

    // Open the PDF in a new window/tab
    return { res, pdfUrl };
  }
}
