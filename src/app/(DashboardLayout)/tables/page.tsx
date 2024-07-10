'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import RecentTransactions from '@/app/(DashboardLayout)/components/dashboard/RecentTransactions';
import ProductPerformance from '@/app/(DashboardLayout)/components/dashboard/ProductPerformance';
import { Grid, Box } from '@mui/material';

const Tables = () => {
  return (
    <PageContainer title="Tables" description="this is Tables">

      <DashboardCard title="Tables">
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <RecentTransactions />
            </Grid>
            <Grid item xs={12} lg={8}>
              <ProductPerformance />
            </Grid>
          </Grid>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default Tables;
