type FormElement = React.FormEvent<HTMLFormElement>;

function ContactPage(): JSX.Element {
  const handleSubmit = (e: FormElement) => e.preventDefault();

  return (
    <div className="container ">
      <h1 className="titles">Contact</h1>

      <form onSubmit={handleSubmit} className="col-md-3 col-sm-6 col-10">
        <fieldset>
          <legend>Send me a message!</legend>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label mt-4">
              Email address:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="form-label mt-4">
              Name:
            </label>
            <input
              type="password"
              className="form-control"
              id="name"
              placeholder="Your name"
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleTextarea" className="form-label mt-4">
              Message:
            </label>
            <textarea
              className="form-control"
              id="exampleTextarea"
              rows={3}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default ContactPage;
