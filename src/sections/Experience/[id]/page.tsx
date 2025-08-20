import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Accept params from Next.js dynamic route
interface PageProps {
    params: { id: string };
}


// Types for experience details
type InstituteImage = { src: string; alt: string };
type InstituteDetails = { description: string; images: InstituteImage[] };
type ExperienceDetail = {
    institute: string;
    role: string;
    metaTitle: string;
    metaDescription: string;
    fullStory: any[];
    instituteDetails: InstituteDetails;
};

const fullExperienceDetails: { [key: string]: ExperienceDetail } = {
    "1": {
        institute: "Sir SM Imran's Institute",
        role: 'IELTS, PTE, English & Management',
        metaTitle: 'My Experience as an IELTS & Management Professional at Sir SM Imran\'s Institute',
        metaDescription: 'Read about my detailed experience at Sir SM Imran\'s Institute, where I worked as an IELTS and PTE instructor and also managed operational tasks to ensure a smooth learning environment.',
        fullStory: [],
        instituteDetails: {
            description: 'Sir SM Imran\'s Institute is a reputable educational center known for its comprehensive language training programs. The institute focuses on providing a supportive learning environment with state-of-the-art facilities for students pursuing international language proficiency tests like IELTS and PTE.',
            images: [
                { src: '/images/institute_photos/img3.jpg', alt: 'Institute reception area' },
                { src: '/images/institute_photos/img4.jpg', alt: 'Students studying in the library' },
            ]
        }
    },
    2: {
        institute: 'Modern Hospital',
        role: 'Ultrasound Assistant Internship',
        metaTitle: 'My Experience at Modern Hospital: Gaining Ultrasound Expertise',
        metaDescription: 'Read about my 2-month internship at Modern Hospital where I worked under Dr. Maheen and gained hands-on experience in ultrasound procedures and patient reporting.',
        fullStory: [
            { type: 'text', content: "My journey into the healthcare sector began on December 21, 2022, when I started my internship at Modern Hospital. Stepping into the ultrasound department for the first time was both exciting and daunting. I remember feeling a sense of confusion and nervousness, but that feeling quickly faded thanks to a remarkable person—Dr. Maheen. Her calm demeanor and clear guidance transformed my initial anxiety into a thirst for knowledge." },
            { type: 'text', content: "Dr. Maheen's approach was practical and hands-on. She didn't just tell me what to do; she showed me, patiently guiding my hand as I performed my first few scans. Her mentorship helped me bridge the gap between theoretical knowledge from books and the practical application of ultrasound. I supplemented my daily learning by diving deeper into academic texts, taking detailed notes on different pathologies." },
            { type: 'text', content: "Over the next two months, I faced a variety of cases that built my confidence. I learned to use the probing technique with precision, which was crucial for visualizing organs accurately. I worked on cases of cholelithiasis (gallstones), kidney stones, and cystitis, and also had the opportunity to assist with obstetric (OBS) patients. Each case was a unique learning experience that sharpened my diagnostic eye and improved my reporting skills." },
            { type: 'text', content: "This internship was more than just a training period; it was a journey of self-discovery. Under Dr. Maheen's mentorship, I overcame my fear of using the probe and learned to trust my skills. Modern Hospital provided me with the foundational experience I needed to pursue my passion in medical sonography with confidence and a practical understanding of patient care." },
        ],
    // images property removed, images are now in fullStory
        instituteDetails: {
            description: 'Modern Hospital is a well-regarded medical facility with specialized departments, including a state-of-the-art Radiology and Ultrasound department. It is known for its experienced team of doctors and commitment to providing quality patient care.',
            images: [
                // Add relevant images here
            ],
        },
    },
     3: {
        institute: 'AO Hospital',
        role: 'Radiology Internship',
        metaTitle: 'My Radiology Internship at AO Hospital: CT, MRI, X-ray & Ultrasound',
        metaDescription: 'Read about my 2-month internship at AO Hospital where I gained comprehensive experience across the entire radiology department, learning from expert technicians and doctors.',
        fullStory: [
            { type: 'text', content: "My internship at AO Hospital was a deep dive into the world of radiology. I was excited to explore the entire department, starting from my first day. The hospital manager introduced me to the head of the CT Scanning department, where I met Sir Shakeel, the CT Technician. He was the first person to guide me through the intricate process of CT scans, showing me how to prepare a patient and operate the machine with precision." },
            { type: 'image', src: '/images/ao_hospital/ct_room.jpg', alt: 'CT Scanning Room at AO Hospital' },
            { type: 'text', content: "After a few days, I was introduced to Sir Arsalan, the MRI Technician, who patiently explained the complex physics behind MRI imaging. Then came Sir Ehtisham, the X-ray Technician. This team of experts—Sir Shakeel, Sir Arsalan, and Sir Ehtisham—did more than just teach me; they were my mentors. They didn't just tell me how to operate the machines; they showed me, holding my hand at every step, making sure I understood the practical aspects of each procedure." },
            { type: 'image', src: '/images/ao_hospital/mentors.jpg', alt: 'Group photo with mentors at AO Hospital' },
            { type: 'text', content: "Although I had not formally studied CT, MRI, or X-ray before, their guidance made the learning process seamless. I got to observe countless patient cases, which gave me a comprehensive understanding of diagnostic imaging. It was an invaluable two-month period where I gained hands-on experience and overcame the initial learning curve with their support." },
            { type: 'image', src: '/images/ao_hospital/ultrasound.jpg', alt: 'Performing an ultrasound scan' },
            { type: 'text', content: "In addition to the core radiology departments, I also had the privilege of learning from Dr. Shahnawaz, who mentored me in ultrasound. Since AO Hospital specializes in bone-related cases, I saw a wide variety of orthopedic-related patients. This unique exposure provided me with a deep understanding of musculoskeletal ultrasound, complementing my existing knowledge. This internship was a holistic experience that broadened my horizons and equipped me with skills far beyond my initial expectations." },
        ],
    // images property removed, images are now in fullStory
        instituteDetails: {
            description: 'AO Hospital is a renowned medical facility known for its state-of-the-art diagnostic and orthopedic services. The hospital boasts a comprehensive radiology department equipped with the latest CT, MRI, and X-ray technology.',
            images: [], // This array can also be left empty if you don't have separate institute photos
        },
    },
     4: {
        institute: 'Saifee Hospital',
        role: 'Ultrasound Assistant & Typist',
        metaTitle: 'My Journey from Intern to Employee at Saifee Hospital',
        metaDescription: 'Read about my experience at Saifee Hospital, where I started as an intern, was later hired for a job, and gained practical skills in ultrasound and medical typing.',
        fullStory: [
            { type: 'text', content: "My journey at Saifee Hospital began with an internship, a period of immense learning and growth that soon turned into a job. The ultrasound department, with its high volume of patients, was an environment of constant activity. I was immediately welcomed by a team of dedicated assistant girls and experienced doctors who became my mentors." },
            { type: 'image', src: '/images/saifee_hospital/team.jpg', alt: 'Saifee Hospital Ultrasound Team' },
            { type: 'text', content: "Here, I was not just an intern; I was a keen observer and a quick learner. I started by assisting the doctors and observing various ultrasound procedures. Saifee Hospital sees over a hundred patients a day for ultrasounds, which gave me an unprecedented opportunity to see a wide range of cases. I observed and learned to identify various abnormalities, from common pathologies to complex conditions, which I had only read about in books." },
            { type: 'text', content: "One of the most valuable skills I acquired here was medical typing. As part of my role as a typist, I quickly learned to transcribe medical reports with accuracy and speed. This skill was a huge addition to my resume, teaching me the importance of clear and concise documentation in the medical field. It was this dual role—of an assistant in the scanning room and a typist in the office—that gave me a holistic view of a hospital’s operational flow." },
            { type: 'image', src: '/images/saifee_hospital/typing.jpg', alt: 'Typing medical reports at Saifee Hospital' },
            { type: 'text', content: "The transition from an intern to a hired employee was a testament to the hard work and dedication I put in. The experience at Saifee Hospital solidified my practical skills in ultrasound and report management, and it taught me the importance of teamwork and perseverance in a fast-paced medical environment. It was here that my passion for healthcare was truly cemented." },
        ],
    // images property removed, images are now in fullStory
        instituteDetails: {
            description: 'Saifee Hospital is a leading multi-specialty healthcare institution known for its high patient volume and comprehensive medical services. The hospital is equipped with advanced diagnostic facilities and a dedicated team of healthcare professionals.',
            // link property removed, not in InstituteDetails type
            images: [], // Images are now within fullStory
        },
    },
     5: {
        institute: 'Etimad Diagnostic Center',
        role: 'Sonologist',
        metaTitle: 'My Journey as a Sonologist at Etimad Diagnostic Center',
        metaDescription: 'My experience at Etimad Diagnostic Center where I worked as a sonologist, performing a wide range of ultrasound scans independently and diagnosing various abnormalities.',
        fullStory: [
            { type: 'text', content: "My time at Etimad Diagnostic Center marks a significant milestone in my professional life. It was here that my journey from an intern to a full-fledged sonologist began. The trust placed in me to work independently was a testament to my skills and a moment of immense pride. My primary responsibility was to perform a wide range of ultrasound examinations, from basic screenings to more complex diagnostic procedures." },
            { type: 'image', src: '/images/etimad/scan_room.jpg', alt: 'Ultrasound scanning room' },
            { type: 'text', content: "Every day was a new learning experience. I specialized in performing a wide variety of scans, including Obstetrics and Gynecology (OBS & GYN), and Whole Abdomen. This constant exposure to different cases sharpened my diagnostic abilities. I learned to identify subtle abnormalities that often go unnoticed, such as small cysts in the ovaries, signs of inflammation in the gallbladder, and early-stage renal stones." },
            { type: 'text', content: "The real-world experience of diagnosing pathologies, from simple fatty liver conditions to more complicated tumors, was invaluable. The knowledge I gained from books and internships was now being put into practice, and I was making a real impact on patient care. The responsibility of providing accurate reports taught me precision and attention to detail, crucial skills in the medical field." },
            { type: 'image', src: '/images/etimad/report.jpg', alt: 'Reviewing a patient report' },
            { type: 'text', content: "I also had the opportunity to learn about the latest diagnostic techniques and technologies, which kept my skills up-to-date. This experience not only solidified my expertise as an ultrasound doctor but also gave me the confidence to handle my duties with professional independence. It was a fulfilling chapter that shaped me into a competent and reliable medical professional." },
        ],
        instituteDetails: {
            description: 'Etimad Diagnostic Center is a trusted name in diagnostic services, known for its commitment to accurate reporting and advanced technology. The center provides a wide range of medical tests and imaging services to patients.',
            images: [], // Images are now within fullStory
        },
    },
};

export default function detailpage({ params }: PageProps) {
    const item = fullExperienceDetails[params.id];

    if (!item) {
        notFound();
    }

    return(
        <div className="container mx-auto px-4 py-24">
            {/* ... (Existing code for main experience story) */}

            {/* New section for About the Institute */}
            {item.instituteDetails && (
                <div className="mt-16">
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
    )
}