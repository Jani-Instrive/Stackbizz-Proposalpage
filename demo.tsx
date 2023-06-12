import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export default function BasicGrid() {
  // Inside your component
  return (
    <Grid>
      <Grid container>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              borderTop: '1px solid grey',
              minHeight: '100px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>Bidders</Typography>
          </Box>
        </Grid>
        <Grid item xs={0.5}>
          <Box
            sx={{
              borderTop: '1px solid grey',
              minHeight: '100px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>ECW</Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              borderLeft: '1px solid grey',
              borderTop: '1px solid grey',
              minHeight: '100px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>Bidders</Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              borderLeft: '1px solid grey',
              borderTop: '1px solid grey',
              minHeight: '100px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '100px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '100px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '100px',
            }}
          >
            xs=2
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={1.5} minHeight="200px">
          <Box
            sx={{
              borderLeft: '1px solid grey',
              borderRight: '1px solid grey',
              minHeight: '200px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>
              Key Team Members
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={0.5}>
          <Box
            sx={{
              borderTop: '1px solid grey',
              borderRight: '1px solid grey',
              minHeight: '200px',
              backgroundColor: 'black',
            }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                color: 'white',
                backgroundColor: 'black',
              }}
            >
              0%
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              borderTop: '1px solid grey',
              minHeight: '200px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>Bidders</Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '200px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              borderRight: '1px solid grey',
              minHeight: '200px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              borderRight: '1px solid grey',
              minHeight: '200px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              borderRight: '1px solid grey',
              minHeight: '200px',
            }}
          >
            xs=2
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>
              Staffing and
              {/* project management */}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={0.5}>
          {/* <Box
            sx={{
              borderBottom: '1px solid grey',
              borderTop: '1px solid grey',
              // border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}></Typography>
          </Box> */}
          <Box
            sx={{
              borderTop: '1px solid grey',
              borderRight: '1px solid grey',
              minHeight: '50px',
              backgroundColor: 'black',
            }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                color: 'white',
                backgroundColor: 'black',
              }}
            >
              0%
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>Bidders</Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              borderBottom: '1px solid grey',
              // border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={1.5}>
          <Box
            sx={{
              // border: '1px solid grey',
              borderLeft: '1px solid grey',
              borderRight: '1px solid grey',
              minHeight: '50px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>Diversity</Typography>
          </Box>
        </Grid>
        <Grid item xs={0.5}>
          {/* <Box
            sx={{
              borderBottom: '1px solid grey',
              // borderTop: '1px solid grey',
              // border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}></Typography>
          </Box> */}
          <Box
            sx={{
              borderTop: '1px solid grey',
              borderRight: '1px solid grey',
              minHeight: '50px',
              backgroundColor: 'black',
            }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                color: 'white',
                backgroundColor: 'black',
              }}
            >
              0%
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              // border: '1px solid grey',
              borderLeft: '1px solid grey',
              borderRight: '1px solid grey',
              minHeight: '50px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>Bidders</Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              borderBottom: '1px solid grey',
              // border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              borderLeft: '1px solid grey',
              borderRight: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              borderLeft: '1px solid grey',
              borderRight: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              borderLeft: '1px solid grey',
              borderRight: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>Credentials</Typography>
          </Box>
        </Grid>
        <Grid item xs={0.5}>
          {/* <Box
            sx={{
              borderBottom: '1px solid grey',
              // borderTop: '1px solid grey',
              // border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}></Typography>
          </Box> */}
          <Box
            sx={{
              borderTop: '1px solid grey',
              borderRight: '1px solid grey',
              minHeight: '50px',
              backgroundColor: 'black',
            }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                color: 'white',
                backgroundColor: 'black',
              }}
            >
              0%
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>Bidders</Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              // borderBottom: '1px solid grey',
              // border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={1.5}>
          <Box
            sx={{
              // border: '1px solid grey',
              borderLeft: '1px solid grey',
              borderRight: '1px solid grey',
              minHeight: '50px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>Disaggregation</Typography>
          </Box>
        </Grid>
        <Grid item xs={0.5}>
          {/* <Box
            sx={{
              // borderBottom: '1px solid grey',
              // borderTop: '1px solid grey',
              // border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}></Typography>
          </Box> */}
          <Box
            sx={{
              borderTop: '1px solid grey',
              borderRight: '1px solid grey',
              minHeight: '50px',
              backgroundColor: 'black',
            }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                color: 'white',
                backgroundColor: 'black',
              }}
            >
              0%
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              borderLeft: '1px solid grey',
              borderRight: '1px solid grey',
              minHeight: '50px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>Bidders</Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              minHeight: '50px',
              borderTop: '1px solid grey',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              borderLeft: '1px solid grey',
              borderRight: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              borderLeft: '1px solid grey',
              borderRight: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              borderLeft: '1px solid grey',
              borderRight: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>USP</Typography>
          </Box>
        </Grid>
        <Grid item xs={0.5}>
          <Box
            sx={{
              borderTop: '1px solid grey',
              borderRight: '1px solid grey',
              minHeight: '50px',
              backgroundColor: 'black',
            }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                color: 'white',
                backgroundColor: 'black',
              }}
            >
              0%
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>Bidders</Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              borderBottom: '1px solid grey',
              borderTop: '1px solid grey',
              // border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>Video</Typography>
          </Box>
        </Grid>
        <Grid item xs={0.5}>
          <Box
            sx={{
              borderTop: '1px solid grey',
              borderRight: '1px solid grey',
              minHeight: '50px',
              backgroundColor: 'black',
            }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                color: 'white',
                backgroundColor: 'black',
              }}
            >
              0%
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>Bidders</Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              borderBottom: '1px solid grey',
              borderTop: '1px solid grey',
              // border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>Other</Typography>
          </Box>
        </Grid>
        <Grid item xs={0.5}>
          <Box
            sx={{
              borderTop: '1px solid grey',
              borderRight: '1px solid grey',
              minHeight: '50px',
              backgroundColor: 'black',
            }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                color: 'white',
                backgroundColor: 'black',
              }}
            >
              0%
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>Bidders</Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              borderBottom: '1px solid grey',
              borderTop: '1px solid grey',
              // border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            xs=2
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}></Typography>
          </Box>
        </Grid>
        <Grid item xs={0.5}>
          <Box
            sx={{
              borderTop: '1px solid grey',
              borderBottom: '1px solid grey',
              minHeight: '50px',
            }}
          >
            {/* <Typography
              sx={{
                textAlign: 'center',
                color: 'white',
              }}
            ></Typography> */}
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
              backgroundColor: 'black',
            }}
          >
            <Typography sx={{ textAlign: 'center', color: 'white' }}>
              Total : 0
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
              backgroundColor: 'black',
            }}
          >
            <Typography sx={{ textAlign: 'center', color: 'white' }}>
              Total : 0
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
              backgroundColor: 'black',
            }}
          >
            <Typography sx={{ textAlign: 'center', color: 'white' }}>
              Total : 0
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
              backgroundColor: 'black',
            }}
          >
            <Typography sx={{ textAlign: 'center', color: 'white' }}>
              Total : 0
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={1.5}>
          <Box
            sx={{
              border: '1px solid grey',
              minHeight: '50px',
              backgroundColor: 'black',
            }}
          >
            <Typography sx={{ textAlign: 'center', color: 'white' }}>
              Total : 0
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
