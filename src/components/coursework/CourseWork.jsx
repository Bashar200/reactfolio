import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const certifications = [
  { title: "Certified Data Analyst", year: "2024", link: "https://www.coursera.org/google-data-analyst" },
  { title: "Power BI Specialist", year: "2024", link: "https://learn.microsoft.com/en-us/certifications/power-bi-data-analyst-associate/" },
  { title: "Advanced Excel", year: "2024", link: "https://www.coursera.org/learn/excel-advanced" },
  { title: "Python Beginner to Expert", year: "2024", link: "#" },
  { title: "Mastering R language for Data Analysis", year: "2024", link: "#" },
  { title: "Power BI Masterclass", year: "2025", link: "#" },
  { title: "Project Management", year: "2025", link: "#" },
  { title: "Prompt Engineering", year: "2025", link: "#" },
  { title: "SEO + AI Automation", year: "2025", link: "#" },
  { title: "Data Analytics", year: "2025", link: "#" },
  { title: "Growth Marketing", year: "2025", link: "#" }
];

const Certifications = () => {
  return (
    <div className="w-full p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Certifications & Coursework</h2>
      <TableContainer component={Paper} className="shadow-lg mb-6" sx={{ borderRadius: "12px" }}>
        <Table sx={{ border: "none" }}>
          <TableHead>
            <TableRow sx={{ border: "none" }} className="bg-gray-200">
              <TableCell className="font-bold" sx={{ border: "none" }}>Title</TableCell>
              <TableCell className="font-bold" sx={{ border: "none" }}>Year</TableCell>
              <TableCell className="font-bold" sx={{ border: "none" }}>Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {certifications.map((cert, index) => (
              <TableRow key={index} sx={{ border: "none" }}>
                <TableCell sx={{ border: "none" }}>{cert.title}</TableCell>
                <TableCell sx={{ border: "none" }}>{cert.year}</TableCell>
                <TableCell sx={{ border: "none" }}>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    View
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Certifications;
