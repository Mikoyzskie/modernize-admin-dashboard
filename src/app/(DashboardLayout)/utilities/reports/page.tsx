'use client';
import { Typography, Grid, CardContent } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import BlankCard from '@/app/(DashboardLayout)/components/shared/BlankCard';
import {
  IconRoute,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconTable,
  IconReportAnalytics,
  IconUserPlus,
} from "@tabler/icons-react";

const reports = [
  {
    reportName: "Weekly Collection Overview",
    shortDescription: "Summary of weekly trash collection stats."
  },
  {
    reportName: "Recycling Rates Analysis",
    shortDescription: "Insights into recycling rates and trends."
  },
  {
    reportName: "Missed Collections Report",
    shortDescription: "Details of missed trash pickups and reasons."
  },
  {
    reportName: "Monthly Collection Efficiency",
    shortDescription: "Efficiency metrics of monthly trash collection."
  },
  {
    reportName: "Holiday Collection Schedule",
    shortDescription: "Adjusted trash pickup schedule for holidays."
  },
  {
    reportName: "Annual Waste Reduction Summary",
    shortDescription: "Yearly report on waste reduction efforts."
  }
];

const TypographyPage = () => {
  return (
    <PageContainer title="Reports" description="this is Reports">

      <Grid container spacing={3}>
        <Grid item sm={12}>
          <DashboardCard title="Reports">
            <Grid container spacing={3}>


              {
                reports.map((report, index) => {
                  return (
                    <Grid item sm={12} key={index}>
                      <BlankCard>
                        <CardContent>
                          <div style={{ display: "flex", gap: "10px" }}>
                            <IconReportAnalytics />
                            <Typography variant="subtitle1">
                              {report.reportName}
                            </Typography>
                          </div>

                          <Typography variant="body1" color="textSecondary">
                            {
                              report.shortDescription
                            }
                          </Typography>
                        </CardContent>
                      </BlankCard>
                    </Grid>
                  )
                })
              }
            </Grid>

          </DashboardCard>
        </Grid>
        {/* <Grid item sm={12}>
          <DashboardCard title="Default Text">
            <Grid container spacing={3}>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography variant="h5" color="textprimary">
                      Text Primary
                    </Typography>

                    <Typography variant="body1" color="textprimary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography variant="h5" color="textSecondary">
                      Text Secondary
                    </Typography>

                    <Typography variant="body1" color="textSecondary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography variant="h5" sx={{ color: (theme) => theme.palette.info.main }}>
                      Text Info
                    </Typography>

                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.info.main }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography variant="h5" sx={{ color: (theme) => theme.palette.primary.main }}>
                      Text Primary
                    </Typography>

                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.primary.main }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography variant="h5" sx={{ color: (theme) => theme.palette.warning.main }}>
                      Text Warning
                    </Typography>

                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.warning.main }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography variant="h5" sx={{ color: (theme) => theme.palette.error.main }}>
                      Text Error
                    </Typography>

                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography variant="h5" sx={{ color: (theme) => theme.palette.success.main }}>
                      Text Success
                    </Typography>

                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.success.main }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
            </Grid>
          </DashboardCard>
        </Grid> */}
      </Grid >
    </PageContainer>
  );
};

export default TypographyPage;
