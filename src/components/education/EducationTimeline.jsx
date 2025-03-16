import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { Typography } from "@mui/material";

const educationData = [
  {
    institution: "Army Institue of Management, Kolkata",
    degree: "Master of Business Administration, (MBA)",
    year: "2024 - Present",
  },
  {
    institution: "Govt. College of Engineering, Raipur",
    degree: "Electrical and Electronics Engineering (EEE)",
    year: "2019 - 2023",
  },
  {
    institution: "Holy Cross Senior Seconday School, Raipur",
    degree: "Higher Secondary School",
    year: "2018 - 2019",
  },
];

const EducationTimeline = () => {
  return (
    <div className="w-full p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="h-64 flex flex-wrap justify-center items-center gap-4 overflow-hidden">
      <Timeline position="alternate">
      {educationData.map((edu, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            {index < educationData.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              {edu.degree}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {edu.institution}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {edu.year}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
      </div>
    </div>



    
  );
};

export default EducationTimeline;
