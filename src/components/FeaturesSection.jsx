import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section id="coursesSection" className="section">
      <h2>What We Teach</h2>
      <div className="cards">
        <div className="card">
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIyIiB5PSI2IiB3aWR0aD0iMTgiIGhlaWdodD0iMTIiIHJ4PSIyIiBzdHJva2U9IiMwMDdiZmYiIHN0cm9rZS13aWR0aD0iMiIvPjxyZWN0IHg9IjE4IiB5PSI5IiB3aWR0aD0iMiIgaGVpZ2h0PSI2IiBmaWxsPSIjMDA3YmZmIi8+PGxpbmUgeDE9IjYiIHkxPSI4IiB4Mj0iNiIgeTI9IjE2IiBzdHJva2U9IiMwMDdiZmYiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIxMCIgeTE9IjgiIHgyPSIxMCIgeTI9IjE2IiBzdHJva2U9IiMwMDdiZmYiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIxNCIgeTE9IjgiIHgyPSIxNCIgeTI9IjE2IiBzdHJva2U9IiMwMDdiZmYiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==" alt="Electronics" className="card-icon" />
          <h3>Electronics</h3>
          <p className="muted">Basics of circuits, sensors, Arduino & robotics — 40+ projects.</p>
        </div>
        <div className="card">
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjgiIHI9IjMiIHN0cm9rZT0iIzI4YTc0NSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTEyIDExVjE1IiBzdHJva2U9IiMyOGE3NDUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik05IDEzSDE1IiBzdHJva2U9IiMyOGE3NDUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik04IDE1SDE2IiBzdHJva2U9IiMyOGE3NDUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0xMCAxN0gxNCIgc3Ryb2tlPSIjMjhhNzQ1IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTEgMTlIMTMiIHN0cm9rZT0iIzI4YTc0NSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+" alt="Project Ideas" className="card-icon" />
          <h3>Project Ideas</h3>
          <p className="muted">Line follower, obstacle avoidance, robotic arms & team projects.</p>
        </div>
        <div className="card">
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIyIiB5PSIzIiB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHJ4PSIyIiByeT0iMiIgc3Ryb2tlPSIjZmZjMTA3IiBzdHJva2Utd2lkdGg9IjIiLz48cmVjdCB4PSI2IiB5PSI3IiB3aWR0aD0iMTIiIGhlaWdodD0iOCIgZmlsbD0iI2ZmYzEwNyIvPjxwYXRoIGQ9Ik04IDIxSDE2IiBzdHJva2U9IiNmZmMxMDciIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0xMiAxN1YyMSIgc3Ryb2tlPSIjZmZjMTA3IiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4K" alt="Basics Of Computer" className="card-icon" />
          <h3>Basics Of Computer</h3>
          <p className="muted">Python, web basics and mini-apps for beginners.</p>
        </div>
        <div className="card">
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxIDE1QzIxIDE1LjUzMDQgMjAuNzkzIDE2LjAzOTEgMjAuNDE0MiAxNi40MTQyQzIwLjAzOTEgMTYuNzkzIDE5LjUzMDQgMTcgMTkgMTdIN0wzIDIxVjVDNSAzIDQuNDY5NTcgMyA1IDNIMTlDMTkuNTMwNCAzIDIwLjAzOTEgMy4yMTA3MSAyMC40MTQyIDMuNTg1NzlDMjAuNzkzIDMuOTYwODYgMjEgNC40Njk1NyAyMSA1VjE1WiIgc3Ryb2tlPSIjZGMzNTQ1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" alt="Communication Skills" className="card-icon" />
          <h3>Communication Skills</h3>
          <p className="muted">Communication, presentations & college readiness.</p>
        </div>
        <div className="card">
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3IDIxVjE5QzE3IDE3LjkzOTEgMTYuNTc4NiAxNi41NzgzIDE2LjE3MTZDMTYuMjE3MiAxNS43MjE0IDE1LjA2MDkgMTUgMTMgMTVINUMzLjkzOTEzIDE1IDIuOTIxNzIgMTUuNzIxNCAyLjU3ODM2IDE2LjE3MTZDMS43MjE0MyAxNi41NzgzIDEgMTcuOTM5MSAxIDE5VjIxIiBzdHJva2U9IiM2ZjQyYzEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05IDExQzExLjIwOTEgMTEgMTMgOS4yMDkxNCAxMyA3QzEzIDQuNzkwODYgMTEuMjA5MSAzIDkgM0M2Ljc5MDg2IDMgNSA0Ljc5MDg2IDUgN0M1IDkuMjA5MTQgNi43OTA4NiAxMSA5IDExWiIgc3Ryb2tlPSIjNmY0MmMxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjMgMjFWMTlDMjIuOTkzIDE4LjExMzcgMjIuNzA0NCAxNy4yNTI4IDIyLjE2MTQgMTYuNTUyM0MyMjAuNjE4NCAxNS44NTE5IDIxLjg1ODEgMTUuMzUxNiAyMSAxNS4xMyIgc3Ryb2tlPSIjNmY0MmMxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTYgMy4xM0MxNi44NjA0IDMuMzUwMzEgMTcuNjIzIDMuODUwNzEgMTguMTY3NiA0LjU1MjMyQzE4LjcxMjIgNS4yNTM5MiAxOS4wMDc4IDYuMTE2ODMgMTkuMDA3OCA3LjAwMzgzQzE5LjAwNzggNy44OTA4MyAxOC43MTIyIDguNzUzNzQgMTguMTY3NiA5LjQ1NTM0QzE3LjYyMyAxMC4xNTY5IDE2Ljg2MDQgMTAuNjU3MyAxNiAxMC44Nzc4IiBzdHJva2U9IiM2ZjQyYzEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaWluPSJyb3VuZCIvPgo8L3N2Zz4K" alt="Soft Skills" className="card-icon" />
          <h3>Soft Skills</h3>
          <p className="muted">Leadership, teamwork & study skills for success.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
