import { Box, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
 
const InfoLabel = styled(Typography)({
  color: "#666666",
  fontSize: "0.875rem",
  marginBottom: "4px",
  fontWeight: 400,
});
 
const InfoValue = styled(Typography)({
  fontSize: "1rem",
  fontWeight: 500,
  color: "#000000",
});
 
const StyledCard = styled(Card)({
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
  width: "80%",
  borderRadius: "8px",
  backgroundColor: "#ffffff",
});
 
const RequestInformation = () => {
  return (
    <StyledCard sx={{ maxWidth: 1200, margin: "20px auto", p: 2 }}>
      <CardContent sx={{ p: 3 }}>
        {/* Top Row: 6 elements */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 2,
            mb: 2,
          }}
        >
          <Box>
            <InfoLabel>Request ID/No:</InfoLabel>
            <InfoValue>#1234</InfoValue>
          </Box>
          <Box>
            <InfoLabel>Request by:</InfoLabel>
            <InfoValue>Joe Maison</InfoValue>
          </Box>
          <Box>
            <InfoLabel>Project:</InfoLabel>
            <InfoValue>Wallmart</InfoValue>
          </Box>
          <Box>
            <InfoLabel>Service Division</InfoLabel>
            <InfoValue>Tech Services</InfoValue>
          </Box>
          <Box>
            <InfoLabel>Expected Completion</InfoLabel>
            <InfoValue>31st Jan 2025</InfoValue>
          </Box>
          <Box>
            <InfoLabel>Techstack / Area</InfoLabel>
            <InfoValue>Front-end</InfoValue>
          </Box>
        </Box>
 
        {/* Second Row: 3 elements */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
            mb: 2,
          }}
        >
          <Box>
            <InfoLabel>Primary Skills / Competencies</InfoLabel>
            <InfoValue>Programming Knowledge</InfoValue>
          </Box>
          <Box>
            <InfoLabel>Other Skill Information in Details</InfoLabel>
            <InfoValue>Tech Services</InfoValue>
          </Box>
          <Box>
            <InfoLabel>Completion Criteria</InfoLabel>
            <InfoValue>sed do eiusmod tempor</InfoValue>
          </Box>
        </Box>
 
        {/* Last Row: 1 element */}
        <Box sx={{ mb: 2 }}>
          <InfoLabel>Comments</InfoLabel>
          <InfoValue >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </InfoValue>
        </Box>
      </CardContent>
    </StyledCard>
  );
};
 
export default RequestInformation;