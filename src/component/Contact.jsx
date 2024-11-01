import './Contact.css';
import React, { useState } from 'react';
import Swal from 'sweetalert2'


export default function Contact() {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        comment: ''
    });
    const [result, setResult] = useState(''); // State for feedback messages

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
       // setResult(" ");

        const formData = new FormData(event.target);
        formData.append("access_key", "b2c24a0c-294a-4680-a36b-0042e25807de");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                });
                event.target.reset();
                setFormData({ email: '', name: '', comment: '' }); // Reset local formData state
            } else {
                console.log("Error", data);
                setResult(data.message || "Submission failed. Please try again.");
            }
        } catch (error) {
            console.error("Network error:", error);
            setResult("An error occurred. Please try again.");
        }
    };

    return (
        <section id="contact">
            <div className="container">
                <div className="text-center" style={{ fontSize: '2em' }}>Contact Me</div>

                <div className="row">
                    <div className="col-md-8">
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="comment" className="form-label">Comment</label>
                                <textarea
                                    className="form-control"
                                    id="comment"
                                    name="comment"
                                    rows="3"
                                    value={formData.comment}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <span>{result}</span>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
