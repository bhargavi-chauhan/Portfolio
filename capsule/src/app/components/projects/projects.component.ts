import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-Voting System',
      description:
        'A secure blockchain-based voting system with post-quantum cryptographic signatures for enhanced security.',
      techStack: ['Blockchain', 'Python', 'MySQL'],
      image: 'assets/voting.jpg',
      codeLink: 'https://github.com/bhargavi-chauhan/e-votingApplication',
      liveLink: '#',
    },
    {
      title: 'Interactive Quiz Application',
      description:
        'A responsive web-based quiz app that dynamically loads questions, provides instant feedback, and ensures an engaging experience for users.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      image: 'assets/quiz.jpg',
      codeLink: 'https://github.com/bhargavi-chauhan/CODTECH-Tasks/tree/main/TASK1',
      liveLink: 'https://bhargavi-chauhan.github.io/CODTECH-Tasks/TASK1/index.html',
    },
    {
      title: 'AyurMi - Mindfulness & Ayurveda Journal',
      description:
        'A wellness-focused web journal integrating mindfulness practices with Ayurvedic habits, featuring daily prompts, gratitude journaling, and routine tracking.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
      image: 'assets/ayurmi.jpg',
      codeLink: 'https://github.com/bhargavi-chauhan/AyurMi',
      liveLink: 'https://ayurmi.streamlit.app/',
    },
    {
      title: 'GraphSAGE-Based Malware URL Detection',
      description:
        'A cybersecurity project using Graph Neural Networks and NLP techniques to identify malicious URLs with scalable graph learning.',
      techStack: ['Python', 'PyTorch', 'NLP', 'GraphSAGE'],
      image: 'assets/malware.jpg',
      codeLink: '#',
      liveLink: '#',
    }
  ];
}
