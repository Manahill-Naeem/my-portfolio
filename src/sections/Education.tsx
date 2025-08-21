
export default function Education() {
    return (
        <section
            id="education"
            className="py-20 bg-gradient-to-br from-[#e0e7ff] via-[#f0fdfa] to-[#c7d2fe] dark:from-[#232946] dark:via-[#181f2a] dark:to-[#232946]"
        >
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-[#232946] dark:text-white drop-shadow-lg">
                    Education
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 1 */}
                    <div className="education-card bg-gradient-to-br from-[#f0fdfa] to-[#e0e7ff] dark:from-[#232946] dark:to-[#181f2a] border-l-4 border-[#10b981] dark:border-[#2563eb] rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-shadow flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                                <i className="fas fa-university text-white text-xl"></i>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">2019 - 2021</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-[#2563eb] dark:text-blue-400">Govt. Degree College For Women block M, North Nazimabad, Karachi</h3>
                        <p className="text-gray-700 dark:text-gray-200 mb-4">Intermediate in medical field</p>
                    </div>
                    {/* Card 2 */}
                    <div className="education-card bg-gradient-to-br from-[#f0fdfa] to-[#e0e7ff] dark:from-[#232946] dark:to-[#181f2a] border-l-4 border-[#2563eb] dark:border-[#10b981] rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-shadow flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                <i className="fas fa-stethoscope text-white text-xl"></i>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Jan 2022 - Dec 2022</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-[#2563eb] dark:text-blue-400">KIOU (Karachi Institute of Ultrasonography)</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">Diploma in medical sonography</p>
                    </div>
                    {/* Card 3 */}
                    <div className="education-card bg-gradient-to-br from-[#f0fdfa] to-[#e0e7ff] dark:from-[#232946] dark:to-[#181f2a] border-l-4 border-[#10b981] dark:border-[#2563eb] rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-shadow flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-emerald-400 rounded-lg flex items-center justify-center">
                                <i className="fas fa-language text-white text-xl"></i>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">March 2023 - May 2023</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-[#2563eb] dark:text-blue-400">Sir SM Imran&apos;s Institute</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">Advanced English language certified course</p>
                    </div>
                    {/* Card 4 */}
                    <div className="education-card bg-gradient-to-br from-[#f0fdfa] to-[#e0e7ff] dark:from-[#232946] dark:to-[#181f2a] border-l-4 border-[#2563eb] dark:border-[#10b981] rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-shadow flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                                <i className="fas fa-heartbeat text-white text-xl"></i>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Oct 2023 - Dec 2023</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-[#2563eb] dark:text-blue-400">Dr. Farah Essa Academy</h3>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                            <li>ECG (Electrocardiography) technician certified course</li>
                            <li>N.T certified (3 days workshop)</li>
                        </ul>
                    </div>
                    {/* Card 5 */}
                    <div className="education-card bg-gradient-to-br from-[#f0fdfa] to-[#e0e7ff] dark:from-[#232946] dark:to-[#181f2a] border-l-4 border-[#10b981] dark:border-[#2563eb] rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-shadow flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                                <i className="fas fa-globe text-white text-xl"></i>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Feb 2024 - Present</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-[#2563eb] dark:text-blue-400">Governor of Sindh Initiative</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">IT (Gen AI, web 3.0 and metaverse)</p>
                    </div>
                    {/* Card 6 */}
                    <div className="education-card bg-gradient-to-br from-[#f0fdfa] to-[#e0e7ff] dark:from-[#232946] dark:to-[#181f2a] border-l-4 border-[#2563eb] dark:border-[#10b981] rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-shadow flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                <i className="fas fa-laptop-code text-white text-xl"></i>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Jan 2025 - May 2025</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-[#2563eb] dark:text-blue-400">NED University of Engineering & Technology</h3>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                            <li>Web development</li>
                            <li>Digital Marketing</li>
                            <li>E-commerce professional</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}