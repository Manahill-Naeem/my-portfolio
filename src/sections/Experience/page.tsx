import Link from 'next/link';

export default function Experience(){
    const experienceItems = [
    {
      id: 1,
      institute: "Sir SM Imran's Institute",
      role: 'IELTS, PTE, English Grammar Teaching',
      shortDescription: 'Provided teaching and guidance for IELTS, PTE, and English grammar to students, helping them improve their language proficiency and test scores.',
      icon: 'fas fa-chalkboard-teacher',
      iconBgColor: 'bg-emerald-500',
    },
    {
      id: 2,
      institute: 'Modern Hospital',
      role: 'Ultrasound Assistant Internship (2 months)',
      shortDescription: 'Worked as an assistant to the ultrasound doctor, gaining hands-on experience in ultrasound procedures and patient care during a 2-month internship.',
      icon: 'fas fa-user-md',
      iconBgColor: 'bg-blue-600',
    },
    {
      id: 3,
      institute: 'AO Hospital',
      role: 'Radiology Internship (2 months)',
      shortDescription: 'Completed a 2-month internship in the radiology department, including CT, MRI, ultrasound, and X-ray, developing strong skills in diagnostic imaging and reporting.',
      icon: 'fas fa-hospital-symbol',
      iconBgColor: 'bg-emerald-400',
    },
    {
      id: 4,
      institute: 'Saifee Hospital',
      role: 'Internship (2m) & Job (3m)',
      shortDescription: 'Worked as an intern for 2 months and then as an assistant and typist for 3 months in the ultrasound department, supporting doctors and handling patient reports.',
      icon: 'fas fa-clinic-medical',
      iconBgColor: 'bg-blue-500',
    },
    {
      id: 5,
      institute: 'Etimad Diagnostic Center',
      role: 'Sonologist (14 months)',
      shortDescription: 'Worked individually as a sonologist for 14 months, performing ultrasound scans, reporting, and managing diagnostics independently.',
      icon: 'fas fa-vials',
      iconBgColor: 'bg-emerald-500',
    },
];
    return(
        <section id="experience" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-black drop-shadow-lg">
                    Experience
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experienceItems.map((item) => (
                        <Link
                            key={item.id}
                            href={`/experience/${item.id}`}
                            className="block bg-gray-800 rounded-2xl p-6 hover:shadow-2xl transition-shadow cursor-pointer"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 ${item.iconBgColor} rounded-lg flex items-center justify-center`}>
                                    <i className={`${item.icon} text-white text-xl`}></i>
                                </div>
                                <span className="text-sm text-gray-400">{item.role}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">
                                {item.institute}
                            </h3>
                            <p className="text-gray-400 mb-4">
                                {item.shortDescription}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

    )
}