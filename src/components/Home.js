import React from 'react';
import { useTheme } from './ThemeContext';
import { useForm, ValidationError } from '@formspree/react';

const Home = () => {
  const { colors } = useTheme();
  const [state, handleSubmit] = useForm("mqaqgqwn");

  return (
    <div className="home-container" style={{ backgroundColor: colors.background, color: colors.text }}>
      {/* HERO SECTION */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1 className="hero-title">Yücel Aytaç Akgün</h1>
          <p className="hero-subtitle">Computer Engineer, Artificial Intelligence & Robotics Enthusiast</p>
          <div className="hero-buttons">
            <a href="#projects" className="hero-btn primary">My Projects</a>
            <a href="#contact" className="hero-btn outline">Contact Me</a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section about-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-card">
          <p className="about-bio">
            I am a computer Engineer specializing in artificial intelligence, robotics, Image Processing, and Computer Vision. I am passionate about technology and innovation.
          </p>
          <div className="skills-bars">
            <div className="skill-bar">
              <span>React</span>
              <div className="bar-bg"><div className="bar-fill" style={{width: '50%'}}></div></div>
            </div>
            {/* Flutter Eklendi */}
            <div className="skill-bar">
              <span>Flutter</span>
              <div className="bar-bg"><div className="bar-fill" style={{width: '85%'}}></div></div>
            </div>
            <div className="skill-bar">
              <span>JavaScript</span>
              <div className="bar-bg"><div className="bar-fill" style={{width: '65%'}}></div></div>
            </div>
            <div className="skill-bar">
              <span>Python</span>
              <div className="bar-bg"><div className="bar-fill" style={{width: '90%'}}></div></div>
            </div>
            <div className="skill-bar">
              <span>AI</span>
              <div className="bar-bg"><div className="bar-fill" style={{width: '88%'}}></div></div>
            </div>
            <div className="skill-bar">
              <span>Robotics</span>
              <div className="bar-bg"><div className="bar-fill" style={{width: '85%'}}></div></div>
            </div>
            <div className="skill-bar">
              <span>Java</span>
              <div className="bar-bg"><div className="bar-fill" style={{width: '70%'}}></div></div>
            </div>
            <div className="skill-bar">
              <span>C#</span>
              <div className="bar-bg"><div className="bar-fill" style={{width: '72%'}}></div></div>
            </div>
            <div className="skill-bar">
              <span>C</span>
              <div className="bar-bg"><div className="bar-fill" style={{width: '80%'}}></div></div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="projects" className="section works-section">
        <h2 className="section-title">Projects</h2>
        <div className="works-grid">
          
          {}
          <div className="work-card">
            <div className="work-title">Real to Ghibli Style Transfer</div>
            <div className="work-meta">Python • PyTorch • CycleGAN</div>
            <div className="work-desc">A deep learning application that transforms real-world photos into Studio Ghibli-style anime art using CycleGAN architecture and ResNet generators.</div>
            <a href="https://github.com/Aytacus/real_to_ghibli" target="_blank" rel="noopener noreferrer" className="work-btn">View Code →</a>
          </div>

          {}
          <div className="work-card">
            <div className="work-title">AI Voice Desktop Assistant</div>
            <div className="work-meta">Python • Groq LLaMA • Automation</div>
            <div className="work-desc">A voice-controlled assistant capable of launching apps, playing media via Selenium, and executing system commands using Groq's LLaMA 3.3 model.</div>
            <a href="https://github.com/Aytacus/python-ai-desktop-assistant-withvoice" target="_blank" rel="noopener noreferrer" className="work-btn">View Code →</a>
          </div>

          {}
          <div className="work-card">
            <div className="work-title">Story Creator AI</div>
            <div className="work-meta">Python • PyQt6 • BLIP + LLaMA</div>
            <div className="work-desc">A desktop application that combines BLIP for image captioning and LLaMA 3.3 to automatically generate creative stories from user-uploaded images in real-time.</div>
            <a href="https://github.com/Aytacus/storycreator" target="_blank" rel="noopener noreferrer" className="work-btn">View Code →</a>
          </div>

          {}
          <div className="work-card">
            <div className="work-title">Diet Tracker App</div>
            <div className="work-meta">Flutter • Mobile App</div>
            <div className="work-desc">A comprehensive diet tracking application built with Flutter, featuring BMI calculation, food details, and diet lists.</div>
            <a href="https://github.com/Aytacus/diet_tracker_flutter" target="_blank" rel="noopener noreferrer" className="work-btn">View Code →</a>
          </div>

          {}
          <div className="work-card">
            <div className="work-title">BTU LangChain RAG</div>
            <div className="work-meta">Python • AI • RAG</div>
            <div className="work-desc">An AI project using LangChain and RAG (Retrieval-Augmented Generation) to answer questions based on university documents.</div>
            <a href="https://github.com/Aytacus/btu-langchain-rag" target="_blank" rel="noopener noreferrer" className="work-btn">View Code →</a>
          </div>

          {}
          <div className="work-card">
            <div className="work-title">Voice Assistant Music</div>
            <div className="work-meta">Flutter • Voice Recognition</div>
            <div className="work-desc">A mobile application that allows users to control music playback using voice commands.</div>
            <a href="https://github.com/Aytacus/voice_assistant_music" target="_blank" rel="noopener noreferrer" className="work-btn">View Code →</a>
          </div>

           {}
           <div className="work-card">
            <div className="work-title">Offline File Transfer</div>
            <div className="work-meta">Python • Networking</div>
            <div className="work-desc">A Python-based solution for transferring files between devices without requiring an active internet connection.</div>
            <a href="https://github.com/Aytacus/offline_file_transfer" target="_blank" rel="noopener noreferrer" className="work-btn">View Code →</a>
          </div>

          {}
          <div className="work-card">
            <div className="work-title">UART VIP</div>
            <div className="work-meta">SystemVerilog • Verification</div>
            <div className="work-desc">A Verification Intellectual Property (VIP) designed for validating UART communication protocols using SystemVerilog.</div>
            <a href="https://github.com/Aytacus/uart-vip" target="_blank" rel="noopener noreferrer" className="work-btn">View Code →</a>
          </div>

          {}
          <div className="work-card">
            <div className="work-title">NS-3 & SUMO Simulation</div>
            <div className="work-meta">C++ • Simulation</div>
            <div className="work-desc">A network simulation project integrating NS-3 network simulator with SUMO traffic simulator for VANET applications.</div>
            <a href="https://github.com/Aytacus/ns-3_sumo_application" target="_blank" rel="noopener noreferrer" className="work-btn">View Code →</a>
          </div>
        </div>
      </section>

      {}
      <section id="blog" className="section works-section">
        <h2 className="section-title">Blogs</h2>
        <div className="works-grid">
          {}
          <div className="work-card">
            <div className="work-title">Fine-Tuning LLM vs. RAG</div>
            <div className="work-meta">Artificial Intelligence • Medium</div>
            <div className="work-desc">A detailed comparison between Fine-Tuning Large Language Models and Retrieval-Augmented Generation (RAG) techniques.</div>
            <a href="https://medium.com/@akgunyucel/fine-tuning-llm-vs-rag-91d3ed99204b" target="_blank" rel="noopener noreferrer" className="work-btn">Read More →</a>
          </div>

          {}
          <div className="work-card">
            <div className="work-title">Kaggle vs Google Colab: AI Training</div>
            <div className="work-meta">Artificial Intelligence • Medium</div>
            <div className="work-desc">Comparison of two popular platforms used for training artificial intelligence models.</div>
            <a href="https://medium.com/@akgunyucel/kaggle-vs-google-colab-yapay-zeka-e%C4%9Fitimi-13b73d843526" target="_blank" rel="noopener noreferrer" className="work-btn">Read More →</a>
          </div>

          {}
          <div className="work-card">
            <div className="work-title">Hardware Wars: CPU vs GPU vs TPU</div>
            <div className="work-meta">Hardware • Medium</div>
            <div className="work-desc">A comprehensive breakdown of the critical differences between CPU, GPU, and TPU architectures and their specific use cases in AI.</div>
            <a href="https://medium.com/@akgunyucel/hardware-wars-critical-differences-between-cpu-gpu-and-tpu-13437d9cb019" target="_blank" rel="noopener noreferrer" className="work-btn">Read More →</a>
          </div>

          {}
          <div className="work-card">
            <div className="work-title">Model Collapse & Hallucination</div>
            <div className="work-meta">Artificial Intelligence • Medium</div>
            <div className="work-desc">An in-depth look at the silent threats of AI hallucination and model collapse caused by training on synthetic data.</div>
            <a href="https://medium.com/@akgunyucel/model-collapse-and-hallucination-the-silent-end-of-ai-0659c3f358f9" target="_blank" rel="noopener noreferrer" className="work-btn">Read More →</a>
          </div>

          {}
          <div className="work-card">
            <div className="work-title">Controlling SMD Mobile Robots with Groq Cloud</div>
            <div className="work-meta">Technology • April 9, 2025 • 10 min read</div>
            <div className="work-desc">A detailed review on controlling SMD mobile robots with the Groq Cloud...</div>
            <a href="https://acrome.net/post/controlling-smd-mobile-robots-with-groq" className="work-btn" target="_blank" rel="noopener noreferrer">Read More →</a>
          </div>

          {}
          <div className="work-card">
            <div className="work-title">Delta Robot and Conveyor Example</div>
            <div className="work-meta">Technology • November 15, 2024 • 10 min read</div>
            <div className="work-desc">An automation example with delta robots and conveyor...</div>
            <a href="https://acrome.net/post/delta-robot-and-conveyor-example-a-glimpse-into-industrial-automation" className="work-btn" target="_blank" rel="noopener noreferrer">Read More →</a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section contact-section">
        <h2 className="section-title">Contact</h2>
        {state.succeeded ? (
          <div className="success-message">
            <p>Thank you for your message! I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form minimal-form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <textarea
              name="message"
              placeholder="Your message"
              required
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button 
              type="submit" 
              className="hero-btn primary" 
              style={{maxWidth: 220, margin: '0 auto'}}
              disabled={state.submitting}
            >
              {state.submitting ? 'Sending...' : 'Send'}
            </button>
          </form>
        )}
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-socials">
            <a href="https://linkedin.com/in/yücel-aytaç-akgün-358130227" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="24" height="24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg></a>
            <a href="https://github.com/Aytacus" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><svg width="24" height="24" fill="currentColor"><path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.922.43.37.823 1.096.823 2.21 0 1.595-.015 2.88-.015 3.27 0 .32.218.694.825.576 4.765-1.587 8.2-6.086 8.2-11.385 0-6.63-5.37-12-12-12z"/></svg></a>
          </div>
          <div className="footer-copy">© 2025 Yücel Aytaç Akgün. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Home;