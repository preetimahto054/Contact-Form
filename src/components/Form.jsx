import "./Form.css";

export default function Form() {
  return (
    <div className="img">
      <section className="container">
        <div>
          <div className="buttons">
            <button className="btn">
              {" "}
              <i class="fa-solid fa-envelope-open-text"></i> &nbsp;VIA SUPPORT
              CHAT
            </button>
            <button className="btn">
              <i class="fa-solid fa-phone"></i> &nbsp;VIA CALL
            </button>
          </div>
          <button className="btns">
            <i class="fa-regular fa-envelope"></i> &nbsp;VIA EMAIL FORM
          </button>
        </div>

        <div className="form">
          <form action="/action">
            <div className="form_control">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>

            <div className="form_control">
              <label htmlFor="mail">E-Mail</label>
              <input type="text" name="mail" />
            </div>

            <div className="form_control2">
              <label htmlFor="msg">Message</label>
              <textarea name="msg" rows={6} />
            </div>

            <button className="submit">SUBMIT</button>
          </form>
        </div>
      </section>
      <div className="img">
        <img src="/images/form-image.png" alt="form-image" />
      </div>
    </div>
  );
}
