import { motion } from "framer-motion";
import { FaPython, FaChartBar, FaFileExcel, FaRProject, FaFilePowerpoint, FaProjectDiagram, FaBrain } from "react-icons/fa";

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "PowerBI", icon: <FaChartBar /> },
  { name: "Excel", icon: <FaFileExcel /> },
  { name: "R", icon: <FaRProject /> },
  { name: "PowerPoint", icon: <FaFilePowerpoint /> },
  { name: "Prompt Engineering", icon: <FaBrain /> },
  { name: "Project Management", icon: <FaProjectDiagram /> }
];

const FloatingBubbles = () => {
  return (
    <div className="w-full p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="h-64 flex flex-wrap justify-center items-center gap-4 overflow-hidden">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg text-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.2 }}
          >
            <span className="text-2xl">{skill.icon}</span>
            <span className="text-base">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FloatingBubbles;
