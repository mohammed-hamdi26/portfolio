function DownLoadCv() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("mohammed hamdi.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "mohammed hamdi.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="bg-white bg-opacity-5 backdrop-blur-lg px-5 p-7 rounded-full">
      <button
        onClick={onButtonClick}
        className="bg-orange-primary uppercase py-4 px-9 rounded-full text-white font-bold text-xl hover:bg-opacity-80 transition-all duration-300"
      >
        {" "}
        download CV
      </button>
    </div>
  );
}

export default DownLoadCv;
