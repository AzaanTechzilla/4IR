export default function Model({ close, margin }) {
  return (
    <>
      <div
        className="modal"
        style={{ display: "block", opacity: '1', marginTop: margin }}
        aria-labelledby="demo-modalLabel"
        aria-hidden="true"
        data-aos="fade-down"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-3 text-white text-center"
                style={{ textAlign: "center" }}
                id="demo-modalLabel"
              >
                Book a <span style={{ color: "#8700ff" }}>Demo</span>
              </h1>
            </div>
            <div className="modal-body">
              <iframe
                className="calendly-inline-widget"
                src="https://calendly.com/bkrevoy/60-minute-meeting-for-4ir-consulting?background_color=1a1a1a&text_color=ffffff"
                style={{ minWidth: "100%", height: "90vh" }}
                loading="lazy"
              ></iframe>
            </div>
            <div className="modal-footer">
              <button className="btn-1" onClick={close}> Close</button >
            </div>
          </div>
        </div>
      </div>

    </>
  )
}