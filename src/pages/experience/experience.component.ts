import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Mass-Analytics – Tunis, Tunisia',
      role: 'Software Engineer',
      duration: 'Aug 2024 – Present',
      description: `As a Frontend Engineer, built and optimized responsive user interfaces with JavaFX and Angular,
      improving usability and user experience through thoughtful design and collaboration. Enhanced performance by reducing
      load times and streamlining data handling, contributing to a 40% faster application response. Actively participated in testing and feedback cycles,
      refining features based on user insights, and worked closely with teammates to share best practices in frontend development.`,
      imageUrl: '../../assets/mass-analytics.png',
    },
    {
      company: 'Telnet – Urban Center, Tunis',
      role: 'Full-stack Web Developer Intern',
      duration: 'Feb 2024 – Present',
      description: `Delivering an optimized microservices-based solution by developing a user-friendly hybrid work management app. 
      Integrated features to enhance usability and streamline workflow, improving efficiency by 50%. Re-engineered processes, 
      improving communication across 4 departments and reducing paperwork by 75%.`,
      imageUrl: '../../assets/telnet.webp',
    },
    {
      company: 'Aleia – Tunis, Montreal',
      role: 'Web Designer',
      duration: 'Jul 2023 – Jan 2024',
      description: `Developed SEO-centric websites using PHP, WordPress, JavaScript, and CSS, boosting organic traffic by 40% 
      across 7 successful projects. Implemented Figma designs with React.Js, boosting conversion rates by 15%, enhancing user 
      experience and ensuring high client satisfaction.`,
      imageUrl: '../../assets/aleia.svg',
    },
    {
      company: 'Gomycode – Tunis, Sousse',
      role: 'Web Development Instructor',
      duration: 'Sept 2022 – June 2023',
      description: `Mentored over 100 aspiring web developers in HTML, CSS, JavaScript, and Git, fostering hands-on learning. 
      Introduced advanced concepts in the MERN stack, encouraging experimentation and skill development, leading to successful 
      project completions by 90% of students. Inspired coding passion and empowered students to excel in web development, 
      resulting in high student satisfaction and positive feedback.`,
      imageUrl: '../../assets/gomycode.JPG',
    },
    {
      company: 'Freelance – World Wide',
      role: 'Freelance Web Designer',
      duration: 'Sept 2022 – Present',
      description: `As a Web Designer, I’ve collaborated with clients globally, delivering customized, responsive websites that enhance brand appeal.
      Through LinkedIn, Upwork, and other platforms, I’ve designed intuitive, visually engaging sites that meet diverse client needs and drive user engagement.`,
      imageUrl: '../../assets/freelance.jpeg',
    },
    {
      company: 'Talan – Tunis, Tunisia',
      role: 'Salesforce Developer Intern',
      duration: 'June 2022 – Aug 2022',
      description: `Developed Lightning Web Components for an insurance CRM, improving client management efficiency by 80%. 
      Implemented Java solutions to customize the user experience, meeting clients' requirements, and achieving high client 
      satisfaction.`,
      imageUrl: '../../assets/talan.jpg',
    },
  ];
}
