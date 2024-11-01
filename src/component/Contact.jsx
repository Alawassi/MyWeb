import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function Contact() {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        comment: ''
    });
    const [result, setResult] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = async (event) => {
        event.preventDefault();

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
                    text: "Your message was sent successfully!",
                    icon: "success"
                });
                event.target.reset();
                setFormData({ email: '', name: '', comment: '' });
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
                <div className="text-center mb-4">Contact Me</div>

                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
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
                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                            <span className="d-block mt-2 text-center">{result}</span>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
                #contact {
                    padding: 40px;
                    font-size: 1.2em;
                }
                .container {
                    max-width: 100%;
                    margin: auto;
                }
                .text-center {
                    font-size: 3em;
                }
                .form-control {
                    font-size: 1em;
                }

                /* Responsive adjustments */
                @media (max-width: 768px) {
                    #contact {
                        padding: 40px;
                    }
                    .text-center {
                        font-size: 5em;
                    }
                    .form-control {
                        font-size: 1em;
                    }
                }

                @media (max-width: 576px) {
                    #contact {
                        padding: 15px;
                    }
                    .text-center {
                        font-size: 1.3em;
                    }
                    .form-control {
                        font-size: 0.85em;
                    }
                    .container {
                        width: 100%;
                        padding: 0 10px;
                    }
                }
            `}</style>
        </section>
    );
}
