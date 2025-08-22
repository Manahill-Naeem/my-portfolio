import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// Accept params from Next.js dynamic route
interface PageProps {
    params: { id: string };
}

// Types for experience details
type InstituteImage = { src: string; alt: string };
type InstituteDetails = { description: string; images: InstituteImage[] };
interface StoryText {
    type: 'text';
    content: string;
}
interface StoryImage {
    type: 'image';
    src: string;
    alt: string;
}
type StoryItem = StoryText | StoryImage;
type ExperienceDetail = {
        institute: string;
        role: string;
        metaTitle: string;
        metaDescription: string;
        fullStory: StoryItem[];
        instituteDetails: InstituteDetails;
};

const fullExperienceDetails: { [key: string]: ExperienceDetail } = {
    "1": {
        institute: "Sir SM Imran's Institute",
        role: 'IELTS, PTE, English & Management',
        metaTitle: 'My Experience as an IELTS & Management Professional at Sir SM Imran\'s Institute',
        metaDescription: 'Read about my detailed experience at Sir SM Imran\'s Institute, where I worked as an IELTS and PTE instructor and also managed operational tasks to ensure a smooth learning environment.',
        fullStory: [
            { type: 'text', content: "My professional journey took a significant turn when I joined Sir SM Imran's Institute, a place that taught me more than just a job—it taught me the art of communication and guidance. My primary role was to guide students through the complexities of the IELTS and PTE exams, focusing on all four modules: Reading, Writing, Listening, and Speaking." },
            { type: 'image', src: '/images/imran_institute/teaching.jpg', alt: 'IELTS classroom session' },
            { type: 'text', content: "I began by creating personalized study plans for each student, tailoring my approach to their specific weaknesses. For speaking, I conducted mock interviews and daily conversation sessions to boost their confidence. For writing, I introduced them to different essay structures and provided detailed feedback on their assignments, ensuring they understood the nuances of academic and general writing formats." },
            { type: 'image', src: '/images/imran_institute/management.jpg', alt: 'Managing institute operations' },
            { type: 'text', content: "Beyond the classroom, I was entrusted with management duties. This included coordinating class schedules, managing student enrollment, and ensuring the smooth operation of daily activities. This dual role gave me a unique perspective on the entire educational process." },
            { type: 'text', content: "This comprehensive experience was truly a turning point in my career. It was here that I learned to bridge the gap between being an effective educator and a competent administrator, a skill set that continues to benefit me in all my professional endeavors." }
        ],
        instituteDetails: {
            description: 'Sir SM Imran\'s Institute is a reputable educational center known for its comprehensive language training programs. The institute focuses on providing a supportive learning environment with state-of-the-art facilities for students pursuing international language proficiency tests like IELTS and PTE.',
            images: [
                { src: '/images/institute_photos/img3.jpg', alt: 'Institute reception area' },
                { src: '/images/institute_photos/img4.jpg', alt: 'Students studying in the library' },
            ]
        }
    },
    "2": {
        institute: 'Modern Hospital',
        role: 'Ultrasound Assistant Internship',
        metaTitle: 'My Experience at Modern Hospital: Gaining Ultrasound Expertise',
        metaDescription: 'Read about my 2-month internship at Modern Hospital where I worked under Dr. Maheen and gained hands-on experience in ultrasound procedures and patient reporting.',
        fullStory: [
            { type: 'text', content: "My journey into the healthcare sector began on December 21, 2022, when I started my internship at Modern Hospital. Stepping into the ultrasound department for the first time was both exciting and daunting. I remember feeling a sense of confusion and nervousness, but that feeling quickly faded thanks to a remarkable person—Dr. Maheen." },
            { type: 'image', src: '/images/modern_hospital/ultrasound_room.jpg', alt: 'Ultrasound room at Modern Hospital' },
            { type: 'text', content: "Dr. Maheen's approach was practical and hands-on. She didn't just tell me what to do; she showed me, patiently guiding my hand as I performed my first few scans. Her mentorship helped me bridge the gap between theoretical knowledge from books and the practical application of ultrasound." },
            { type: 'image', src: '/images/modern_hospital/patient_scan.jpg', alt: 'Performing a patient scan' },
            { type: 'text', content: "Over the next two months, I faced a variety of cases that built my confidence. I learned to use the probing technique with precision, which was crucial for visualizing organs accurately. I worked on cases of cholelithiasis (gallstones), kidney stones, and cystitis, and also had the opportunity to assist with obstetric (OBS) patients." },
            { type: 'text', content: "This internship was more than just a training period; it was a journey of self-discovery. Under Dr. Maheen's mentorship, I overcame my fear of using the probe and learned to trust my skills. Modern Hospital provided me with the foundational experience I needed." }
        ],
        instituteDetails: {
            description: 'Modern Hospital is a well-regarded medical facility with specialized departments, including a state-of-the-art Radiology and Ultrasound department. It is known for its experienced team of doctors and commitment to providing quality patient care.',
            images: [
                // Add relevant images here
            ],
        },
    },
    "3": {
        institute: 'AO Hospital',
        role: 'Radiology Internship',
        metaTitle: 'My Radiology Internship at AO Hospital: CT, MRI, X-ray & Ultrasound',
        metaDescription: 'Read about my 2-month internship at AO Hospital where I gained comprehensive experience across the entire radiology department, learning from expert technicians and doctors.',
        fullStory: [
            { type: 'text', content: "My internship at AO Hospital was a deep dive into the world of radiology. I was excited to explore the entire department, starting from my first day. The hospital manager introduced me to the head of the CT Scanning department, where I met Sir Shakeel, the CT Technician. He was the first person to guide me through the intricate process of CT scans." },
            { type: 'image', src: '/images/ao_hospital/ct_scanning.jpg', alt: 'CT Scanning machine' },
            { type: 'text', content: "After a few days, I was introduced to Sir Arsalan, the MRI Technician, who patiently explained the complex physics behind MRI imaging. Then came Sir Ehtisham, the X-ray Technician. This team of experts did more than just teach me; they were my mentors." },
            { type: 'image', src: '/images/ao_hospital/mentor_session.jpg', alt: 'Learning from mentors at AO Hospital' },
            { type: 'text', content: "Although I had not formally studied CT, MRI, or X-ray before, their guidance made the learning process seamless. I got to observe countless patient cases, which gave me a comprehensive understanding of diagnostic imaging. It was an invaluable two-month period where I gained hands-on experience." },
            { type: 'text', content: "In addition to the core radiology departments, I also had the privilege of learning from Dr. Shahnawaz, who mentored me in ultrasound. Since AO Hospital specializes in bone-related cases, I saw a wide variety of orthopedic-related patients. This unique exposure provided me with a deep understanding of musculoskeletal ultrasound." }
        ],
        instituteDetails: {
            description: 'AO Hospital is a renowned medical facility known for its state-of-the-art diagnostic and orthopedic services. The hospital boasts a comprehensive radiology department equipped with the latest CT, MRI, and X-ray technology.',
            images: [],
        },
    },
    "4": {
        institute: 'Saifee Hospital',
        role: 'Ultrasound Assistant & Typist',
        metaTitle: 'My Journey from Intern to Employee at Saifee Hospital',
        metaDescription: 'Read about my experience at Saifee Hospital, where I started as an intern, was later hired for a job, and gained practical skills in ultrasound and medical typing.',
        fullStory: [
            { type: 'text', content: "My journey at Saifee Hospital began with an internship, a period of immense learning and growth that soon turned into a job. The ultrasound department, with its high volume of patients, was an environment of constant activity. I was immediately welcomed by a team of dedicated assistant girls and experienced doctors who became my mentors." },
            { type: 'image', src: '/images/saifee_hospital/team_photo.jpg', alt: 'Team photo at Saifee Hospital' },
            { type: 'text', content: "Here, I was not just an intern; I was a keen observer and a quick learner. Saifee Hospital sees over a hundred patients a day for ultrasounds, which gave me an unprecedented opportunity to see a wide range of cases. I observed and learned to identify various abnormalities." },
            { type: 'image', src: '/images/saifee_hospital/typing_reports.jpg', alt: 'Typing medical reports at Saifee' },
            { type: 'text', content: "One of the most valuable skills I acquired here was medical typing. As part of my role as a typist, I quickly learned to transcribe medical reports with accuracy and speed. This skill was a huge addition to my resume, teaching me the importance of clear and concise documentation." },
            { type: 'text', content: "The transition from an intern to a hired employee was a testament to the hard work and dedication I put in. The experience at Saifee Hospital solidified my practical skills in ultrasound and report management, and it taught me the importance of teamwork and perseverance in a fast-paced medical environment." }
        ],
        instituteDetails: {
            description: 'Saifee Hospital is a leading multi-specialty healthcare institution known for its high patient volume and comprehensive medical services. The hospital is equipped with advanced diagnostic facilities and a dedicated team of healthcare professionals.',
            images: [],
        },
    },
    "5": {
        institute: 'Etimad Diagnostic Center',
        role: 'Sonologist',
        metaTitle: 'My Journey as a Sonologist at Etimad Diagnostic Center',
        metaDescription: 'My experience at Etimad Diagnostic Center where I worked as a sonologist, performing a wide range of ultrasound scans independently and diagnosing various abnormalities.',
        fullStory: [
            { type: 'text', content: "My time at Etimad Diagnostic Center marks a significant milestone in my professional life. It was here that my journey from an intern to a full-fledged sonologist began. The trust placed in me to work independently was a testament to my skills and a moment of immense pride. My primary responsibility was to perform a wide range of ultrasound examinations." },
            { type: 'image', src: '/images/etimad/diagnostics_lab.jpg', alt: 'Etimad Diagnostics lab' },
            { type: 'text', content: "Every day was a new learning experience. I specialized in performing a wide variety of scans, including Obstetrics and Gynecology (OBS & GYN), and Whole Abdomen. This constant exposure to different cases sharpened my diagnostic abilities. I learned to identify subtle abnormalities that often go unnoticed." },
            { type: 'image', src: '/images/etimad/consultation.jpg', alt: 'Patient consultation' },
            { type: 'text', content: "The real-world experience of diagnosing pathologies, from simple fatty liver conditions to more complicated tumors, was invaluable. The knowledge I gained from books and internships was now being put into practice, and I was making a real impact on patient care." },
            { type: 'text', content: "I also had the opportunity to learn about the latest diagnostic techniques and technologies, which kept my skills up-to-date. This experience not only solidified my expertise as an ultrasound doctor but also gave me the confidence to handle my duties with professional independence." }
        ],
        instituteDetails: {
            description: 'Etimad Diagnostic Center is a trusted name in diagnostic services, known for its commitment to accurate reporting and advanced technology. The center provides a wide range of medical tests and imaging services to patients.',
            images: [],
        },
    },
};

export default function detailpage({ params }: PageProps) {
    const item = fullExperienceDetails[params.id];

    if (!item) {
        notFound();
    }

    return(
        <section className="min-h-screen py-20 md:py-24 bg-gradient-to-br from-[#232946] via-[#181f2a] to-[#2563eb]">
        <div className="container mx-auto px-4 max-w-3xl">
            {/* Main Experience Story */}
            <div className="bg-gray-800/90 rounded-2xl shadow-2xl p-8 md:p-12 mb-10">
                <h2 className="text-3xl font-bold text-white mb-4">{item.institute}</h2>
                <h4 className="text-xl text-blue-300 mb-8">{item.role}</h4>
                <div className="space-y-8">
                {item.fullStory.map((story, idx) => (
                    story.type === 'text' ? (
                        <p key={idx} className="text-lg text-gray-200 leading-relaxed">{story.content}</p>
                    ) : (
                        <div key={idx} className="w-full flex justify-center my-6">
                            <div className="relative w-full max-w-2xl h-64 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={story.src}
                                    alt={story.alt}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    )
                ))}
                </div>
            </div>

            {/* New section for About the Institute */}
            {item.instituteDetails && (
                <div className="mt-16 bg-gradient-to-br from-[#e0e7ff] via-[#f0fdfa] to-[#f1f5f9] dark:from-[#232946] dark:via-[#232946] dark:to-[#232946] rounded-2xl shadow-xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">About {item.institute}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg mb-8">
                        {item.instituteDetails.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {item.instituteDetails.images.map((img: InstituteImage, index: number) => (
                            <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
        </section>
    )
}
