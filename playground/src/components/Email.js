import React from "react";

export default class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status: "",
		};
	}

	render() {
		const { status } = this.state;
		return (
			<form
				className="contact-form"
				onSubmit={this.submitForm}
				action="https://formspree.io/f/mgernjel"
				method="POST"
			>
				<div className="form-container">
					{status === "SUCCESS" ? <div> </div> : <h1>Get in touch!</h1>}

					<label id="contact-a">Name:</label>
					<input type="name" name="name" />
					<label>Email:</label>
					<input type="email" name="email" />
					<label>Message:</label>
					<textarea rows="10" type="text" name="message" />
					{status === "SUCCESS" ? (
						<p>
							Thanks you for contacting me. I will be in touch with you Asap.
						</p>
					) : (
						<button id="form-button">Submit</button>
					)}
					{status === "ERROR" && <p>Ooops! There was an error.</p>}
				</div>
			</form>
		);
	}

	submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: "SUCCESS" });
			} else {
				this.setState({ status: "ERROR" });
			}
		};
		xhr.send(data);
	}
}
