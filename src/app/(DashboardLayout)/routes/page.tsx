'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import Image from 'next/image';
import styles from "./routes.module.css"

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Avatar, Fab } from '@mui/material';
import { IconArrowUpLeft, IconArrowDownRight, IconPlus } from '@tabler/icons-react';


import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button,
  Link
} from '@mui/material';


const products = [
  {
    id: "1",
    name: "Sunil Joshi",
    post: "Waste Management Officer",
    pname: "San Carlos - Camaya",
    priority: "Low",
    pbg: "error.main",
    budget: "3.9",
  },
  {
    id: "2",
    name: "Andrew McDownland",
    post: "Waste Management Officer",
    pname: "Poblacion - Ricarte",
    priority: "Medium",
    pbg: "secondary.main",
    budget: "24.5",
  },
  {
    id: "3",
    name: "Christopher Jamil",
    post: "Waste Management Officer",
    pname: "San Isidro - Ipag",
    priority: "High",
    pbg: "success.main",
    budget: "12.8",
  },
  {
    id: "4",
    name: "Nirav Joshi",
    post: "Waste Management Officer",
    pname: "Balon - Biaan",
    priority: "Good",
    pbg: "primary.main",
    budget: "2.4",
  },
];

const SamplePage = () => {

  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = '#ecf2ff';
  const successlight = theme.palette.success.light;

  const secondary = theme.palette.secondary.main;
  const secondarylight = '#f5fcff';

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 155,
    },
    colors: [primary, primarylight, '#F9F9FD'],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
          background: 'transparent',
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
  };
  const seriescolumnchart: any = [38, 40, 25];

  const optionscolumnchart2: any = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      colors: [secondarylight],
      type: 'solid',
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  const seriescolumnchart2: any = [
    {
      name: '',
      color: secondary,
      data: [25, 66, 20, 40, 12, 58, 20],
    },
  ];


  const errorlight = '#fdede8';

  return (
    <PageContainer title="Routes" description="this is Routes page">
      <DashboardCard title="Routes">
        <div className={styles.routes__container} >
          <div className='route__placeholder'>
            <Image src="/route.png" alt="Routes placeholder" width={613} height={300} className='placeholder__image' />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h3" fontWeight="700">
              +89 Efficiency Score
            </Typography>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ullam atque sapiente, neque omnis, quaerat ipsam aliquid laudantium quibusdam recusandae eum natus qui vitae? Velit?</p>

            <Button variant="contained" component={Link} href="/sample-page" disableElevation color="primary" >
              <IconPlus size={15} />  &nbsp; &nbsp;
              New Route
            </Button>
          </div>
        </div>
      </DashboardCard>
      <Grid style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Grid container spacing={3}>
          <Grid item xs={4}>

            <DashboardCard title="Route: Ipag">
              <Grid container spacing={3}>
                {/* column */}
                <Grid item xs={7} sm={12}>
                  <Typography variant="h3" fontWeight="700">
                    +89 Efficiency Score
                  </Typography>
                  <Stack direction="row" spacing={1} mt={1} alignItems="center">
                    <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
                      <IconArrowUpLeft width={20} color="#39B69A" />
                    </Avatar>
                    <Typography variant="subtitle2" fontWeight="600">
                      +9%
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      last year
                    </Typography>
                  </Stack>
                  <Stack spacing={3} mt={5} direction="row">
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar
                        sx={{ width: 9, height: 9, bgcolor: primary, svg: { display: 'none' } }}
                      ></Avatar>
                      <Typography variant="subtitle2" color="textSecondary">
                        2022
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar
                        sx={{ width: 9, height: 9, bgcolor: primarylight, svg: { display: 'none' } }}
                      ></Avatar>
                      <Typography variant="subtitle2" color="textSecondary">
                        2023
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                {/* column */}
                {/* <Grid item xs={5} sm={5}>
                  <Chart
                    options={optionscolumnchart}
                    series={seriescolumnchart}
                    type="donut"
                    height={150} width={"100%"}
                  />
                </Grid> */}
              </Grid>
            </DashboardCard>
          </Grid>
          <Grid item xs={4}>
            <DashboardCard title="Route: San Isidro">
              <Grid container spacing={3}>
                {/* column */}
                <Grid item xs={7} sm={12}>
                  <Typography variant="h3" fontWeight="700">
                    +89 Efficiency Score
                  </Typography>
                  <Stack direction="row" spacing={1} mt={1} alignItems="center">
                    <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
                      <IconArrowUpLeft width={20} color="#39B69A" />
                    </Avatar>
                    <Typography variant="subtitle2" fontWeight="600">
                      +9%
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      last year
                    </Typography>
                  </Stack>
                  <Stack spacing={3} mt={5} direction="row">
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar
                        sx={{ width: 9, height: 9, bgcolor: primary, svg: { display: 'none' } }}
                      ></Avatar>
                      <Typography variant="subtitle2" color="textSecondary">
                        2022
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar
                        sx={{ width: 9, height: 9, bgcolor: primarylight, svg: { display: 'none' } }}
                      ></Avatar>
                      <Typography variant="subtitle2" color="textSecondary">
                        2023
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                {/* column */}
                {/* <Grid item xs={5} sm={5}>
                  <Chart
                    options={optionscolumnchart}
                    series={seriescolumnchart}
                    type="donut"
                    height={150} width={"100%"}
                  />
                </Grid> */}
              </Grid>
            </DashboardCard>
          </Grid>
          <Grid item xs={4}>
            <DashboardCard title="Route: Camaya">
              <Grid container spacing={3}>
                {/* column */}
                <Grid item xs={7} sm={12}>
                  <Typography variant="h3" fontWeight="700">
                    +89 Efficiency Score
                  </Typography>
                  <Stack direction="row" spacing={1} mt={1} alignItems="center">
                    <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
                      <IconArrowUpLeft width={20} color="#39B69A" />
                    </Avatar>
                    <Typography variant="subtitle2" fontWeight="600">
                      +9%
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      last year
                    </Typography>
                  </Stack>
                  <Stack spacing={3} mt={5} direction="row">
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar
                        sx={{ width: 9, height: 9, bgcolor: primary, svg: { display: 'none' } }}
                      ></Avatar>
                      <Typography variant="subtitle2" color="textSecondary">
                        2022
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar
                        sx={{ width: 9, height: 9, bgcolor: primarylight, svg: { display: 'none' } }}
                      ></Avatar>
                      <Typography variant="subtitle2" color="textSecondary">
                        2023
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                {/* column */}
                {/* <Grid item xs={5} sm={5}>
                  <Chart
                    options={optionscolumnchart}
                    series={seriescolumnchart}
                    type="donut"
                    height={150} width={"100%"}
                  />
                </Grid> */}
              </Grid>
            </DashboardCard>
          </Grid>
        </Grid>
      </Grid>


      <DashboardCard title="Route Performance Data">
        <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
          <Table
            aria-label="simple table"
            sx={{
              whiteSpace: "nowrap",
              mt: 2
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Id
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Assigned
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Route
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Efficiency
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle2" fontWeight={600}>
                    Time Record
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.name}>
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {product.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle2" fontWeight={600}>
                          {product.name}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          sx={{
                            fontSize: "13px",
                          }}
                        >
                          {product.post}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                      {product.pname}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      sx={{
                        px: "4px",
                        backgroundColor: product.pbg,
                        color: "#fff",
                      }}
                      size="small"
                      label={product.priority}
                    ></Chip>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">{product.budget} </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;

