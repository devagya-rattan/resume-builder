import React, { useState } from "react";

const Resume = () => {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    address: "",
    contact: "",
    career: "",
    about_yourself: "",
    skill_set: "",
    acedamic_profile: "",
  });
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setformData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <div className="main_outer_div">
        <div className="main_inner_div">
          <div className="main_inner_1_div">
            <div className="add_pic_div">+</div>
            <input
              name="username"
              type="text"
              placeholder="Enter your name"
              value={formData.username}
              onChange={handleInput}
            ></input>
            <input
              name="email"
              type="text"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInput}
            ></input>
            <input
              name="address"
              type="text"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleInput}
            ></input>
            <input
              name="contact"
              type="text"
              placeholder="contact no."
              value={formData.contact}
              onChange={handleInput}
            ></input>
          </div>
          <div className="main_inner_2_div">
            Career Objective:
            <textarea
              rows="10"
              cols="60"
              name="career"
              value={formData.career}
              onChange={handleInput}
            ></textarea>
            About Yourself:
            <textarea
              rows="10"
              cols="60"
              name="about_yourself"
              value={formData.about_yourself}
              onChange={handleInput}
            ></textarea>
          </div>
          <div className="main_inner_3_div">
            Skill Set:
            <textarea
              rows="10"
              cols="60"
              name="skill_set"
              value={formData.skill_set}
              onChange={handleInput}
            ></textarea>
            Acedamic profile:
            <textarea
              rows="10"
              cols="60"
              name="acedamic_profile"
              value={formData.acedamic_profile}
              onChange={handleInput}
            ></textarea>
          </div>
        </div>
        <div className="button_div">
          <button>Submit</button>
        </div>
      </div>
      <div className="display_result_div">
            <div className="display_result_image_div">
              <img src="https://1.bp.blogspot.com/-K5WWRluLDYk/Xc1yF9oy2KI/AAAAAAAAA40/Zchx3kfF3xUpIDI0GTZcjuWxqpGGBf0_gCLcBGAsYHQ/s400/WhatsApp%2BDP%2BCollection%2BFor%2BBoys%2B52.jpg" alt="https://1.bp.blogspot.com/-K5WWRluLDYk/Xc1yF9oy2KI/AAAAAAAAA40/Zchx3kfF3xUpIDI0GTZcjuWxqpGGBf0_gCLcBGAsYHQ/s400/WhatsApp%2BDP%2BCollection%2BFor%2BBoys%2B52.jpg" />
            </div>
            <div className="display_result_heading_div">
                <h1>{formData.username}</h1>
                <h4>{formData.email}</h4>
                <h4>{formData.address}</h4>
                <h4>{formData.contact}</h4>
            </div>
      </div>
      <div className="display_result_div_1">
          <div className="display_content_1">
            <div className="display_heading_1">
              <h2>Career Objective:</h2>
            </div>
            <div className="display_c_1">
              <p>{formData.career}</p>
            </div>
          </div>
          <div className="display_content_2">
            <div className="display_heading_2">
            <h2>About Yourself:</h2>
            </div>
            <div className="display_c_2">
            <p>{formData.about_yourself}</p>
            </div>
          </div>
          <div className="display_content_3">
            <div className="display_heading_3">
            <h2>Skill Set:</h2>
            </div>
            <div className="display_c_3">
            <p>{formData.skill_set}</p>
            </div>
          </div>
          <div className="display_content_4">
            <div className="display_heading_4">
            <h2>Acedamic profile:</h2>
            </div>
            <div className="display_c_4">
            <p>{formData.acedamic_profile}</p>
            </div>
          </div>
      </div>

    </>
  );
};

export default Resume;
