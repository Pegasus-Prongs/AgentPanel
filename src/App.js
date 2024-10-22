import { Grid, Badge, Button, IconButton, InputAdornment, TextField, Typography, Container, Chip } from '@mui/material';
import { Paper, Box } from '@mui/material';
import { NotificationAddOutlined, SearchOutlined, LogoutOutlined } from '@mui/icons-material';
import { AccessTime, Call, PhoneInTalk, MonetizationOn, CheckCircle, Assessment } from '@mui/icons-material';
import MultipleSelectChip from './components/MultiChip';
import EditorWithBottomToolbar from './components/EditorWithBottomToolbar';
import CallPad from './components/CallPad';

function App() {
  return (
    <Container maxWidth="xl">
      <Grid container>
        {/* Image Section */}
        <Grid item xs={12}>
          <img alt="Example" />
        </Grid>

        {/* Top Bar */}
        <Grid container item xs={12} spacing={2} sx={{ py: 2, px: 2 }}>
          <Grid item xs={2}>
            <Button variant="contained">Call</Button>
          </Grid>

          <Grid item xs={4}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlined />
                  </InputAdornment>
                )
              }}
            />
          </Grid>

          <Grid container item xs={6} justifyContent="flex-end" alignItems="center" spacing={2}>
            <Grid item>
              <IconButton>
                <Badge badgeContent={99} color="secondary">
                  <NotificationAddOutlined color="action" />
                </Badge>
              </IconButton>
            </Grid>

            <Grid item>
              <Button variant="outlined" color="primary" startIcon={<LogoutOutlined />}>
                Logout
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/* Content Area */}
        <Grid container columns={15} spacing={2}>
          {/* Vertical Button List */}
          <Grid container item xs={2}>
            <div className="flex flex-col gap-4">
              {/* Action Buttons */}
              <div className="flex flex-col gap-2">
                <Button variant="contained" fullWidth>SMS</Button>
                <Button variant="contained" fullWidth>Email</Button>
                <Button variant="contained" fullWidth>My Callback</Button>
                <Button variant="contained" fullWidth>Notes</Button>
                <Button variant="contained" fullWidth>Task</Button>
                <Button variant="contained" fullWidth>View Agents Online</Button>
                <Button variant="contained" fullWidth>Chat</Button>
              </div>

              {/* Statistics Section */}
              <div className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
                <Typography variant="h6" className="font-bold text-gray-800 mb-2">Agent Daily stats</Typography>
                <Grid container spacing={2} direction="row">
                  <Grid item xs={12}>
                    <Paper elevation={3} className="p-4 flex items-center rounded-md">
                      <Box className="mr-2">
                        <Call color="primary" />
                      </Box>
                      <div className="flex-1">
                        <Typography variant="body1" className="font-semibold text-gray-800">Total Calls</Typography>
                        <Typography variant="body1" className="text-gray-600">120</Typography>
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper elevation={3} className="p-4 flex items-center rounded-md">
                      <Box className="mr-2">
                        <PhoneInTalk color="primary" />
                      </Box>
                      <div className="flex-1">
                        <Typography variant="body1" className="font-semibold text-gray-800">Outbound Calls</Typography>
                        <Typography variant="body1" className="text-gray-600">80</Typography>
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper elevation={3} className="p-4 flex items-center rounded-md">
                      <Box className="mr-2">
                        <MonetizationOn color="primary" />
                      </Box>
                      <div className="flex-1">
                        <Typography variant="body1" className="font-semibold text-gray-800">No. of Sales</Typography>
                        <Typography variant="body1" className="text-gray-600">25</Typography>
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper elevation={3} className="p-4 flex items-center rounded-md">
                      <Box className="mr-2">
                        <CheckCircle color="primary" />
                      </Box>
                      <div className="flex-1">
                        <Typography variant="body1" className="font-semibold text-gray-800">Closed Rates</Typography>
                        <Typography variant="body1" className="text-gray-600">65%</Typography>
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper elevation={3} className="p-4 flex items-center rounded-md">
                      <Box className="mr-2">
                        <Assessment color="primary" />
                      </Box>
                      <div className="flex-1">
                        <Typography variant="body1" className="font-semibold text-gray-800">Avg. Talk Time</Typography>
                        <Typography variant="body1" className="text-gray-600">5 mins</Typography>
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper elevation={3} className="p-4 flex items-center rounded-md">
                      <Box className="mr-2">
                        <AccessTime color="primary" />
                      </Box>
                      <div className="flex-1">
                        <Typography variant="body1" className="font-semibold text-gray-800">Inbound Calls</Typography>
                        <Typography variant="body1" className="text-gray-600">40</Typography>
                      </div>
                    </Paper>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>

          {/* Information & Activity Section */}
          <Grid item xs={4} gap={4} sx={{ mt: 2, mb: 2, }}>
            {/* Information Box */}
            <div className="flex flex-col gap-2 p-6 bg-white shadow-lg rounded-lg max-w-lg">
              <div className="flex flex-row justify-between border-b">
                <Typography variant="body1" className="text-gray-600 font-semibold">List ID</Typography>
                <Typography variant="body1" className="text-blue-600">123456</Typography>
              </div>

              <div className="flex flex-row justify-between border-b">
                <Typography variant="body1" className="text-gray-600 font-semibold">Company Name</Typography>
                <Typography variant="body1" className="text-blue-600">ABC Corporation</Typography>
              </div>

              <div className="flex flex-row justify-between border-b">
                <Typography variant="body1" className="text-gray-600 font-semibold">First Name</Typography>
                <Typography variant="body1" className="text-blue-600">John</Typography>
              </div>

              <div className="flex flex-row justify-between border-b">
                <Typography variant="body1" className="text-gray-600 font-semibold">Last Name</Typography>
                <Typography variant="body1" className="text-blue-600">Doe</Typography>
              </div>

              <div className="flex flex-row justify-between border-b">
                <Typography variant="body1" className="text-gray-600 font-semibold">Email Address</Typography>
                <Typography variant="body1" className="text-blue-600">john.doe@example.com</Typography>
              </div>

              <div className="flex flex-row justify-between border-b">
                <Typography variant="body1" className="text-gray-600 font-semibold">Address</Typography>
                <Typography variant="body1" className="text-blue-600">123 Main Street</Typography>
              </div>

              <div className="flex flex-row justify-between border-b">
                <Typography variant="body1" className="text-gray-600 font-semibold">City</Typography>
                <Typography variant="body1" className="text-blue-600">New York</Typography>
              </div>

              <div className="flex flex-row justify-between border-b">
                <Typography variant="body1" className="text-gray-600 font-semibold">State</Typography>
                <Typography variant="body1" className="text-blue-600">NY</Typography>
              </div>

              <div className="flex flex-row justify-between border-b">
                <Typography variant="body1" className="text-gray-600 font-semibold">Phone Number</Typography>
                <Typography variant="body1" className="text-blue-600">(555) 123-4567</Typography>
              </div>

              <div className="flex flex-row justify-between">
                <Typography variant="body1" className="text-gray-600 font-semibold">Mobile Number</Typography>
                <Typography variant="body1" className="text-blue-600">(555) 987-6543</Typography>
              </div>
              <div className="flex justify-end">
                <Button className="bg-blue-600 text-white hover:bg-blue-700" variant="contained">
                  More
                </Button>
              </div>
            </div>

            {/* Activity History Box */}
            <div className="flex flex-col mt-4 gap-2 p-6 bg-white shadow-sm rounded-md max-w-lg">
              <Typography variant="h6">ACTIVITY HISTORY</Typography>

              <div className="flex flex-row border-b ">
                <Typography variant="body1" className="text-gray-600 font-semibold">Comment</Typography>
                <Typography variant="body1" className="flex-1 text-blue-600">123456</Typography>
              </div>

              <div className="flex flex-row border-b ">
                <Typography variant="body1" className="text-gray-600 font-semibold">SMS</Typography>
                <Typography variant="body1" className="flex-1 text-blue-600">123456</Typography>
              </div>

              <div className="flex flex-row border-b ">
                <Typography variant="body1" className="text-gray-600 font-semibold">Email</Typography>
                <Typography variant="body1" className="flex-1 text-blue-600">123456</Typography>
              </div>

              <div className="flex justify-end">
                <Button className="bg-blue-600 text-white hover:bg-blue-700" variant="contained">
                  More
                </Button>
              </div>
            </div>
            <Paper
              elevation={3}
              style={{
                height: '300px',
                borderRadius: '12px', // Rounded corners
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Shadow effect
              }}
            >
              <Typography variant="h6" className="font-bold" gutterBottom>
                Tasks
              </Typography>
              <div className="flex-1 overflow-y-auto">
                <Typography variant="body1">1. Follow up with clients</Typography>
                <Typography variant="body1">2. Update the project status</Typography>
                <Typography variant="body1">3. Prepare the meeting agenda</Typography>
                <Typography variant="body1">4. Review team feedback</Typography>
                <Typography variant="body1">5. Plan next week's tasks</Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs container gap={4} columns={12} sx={{
            padding: 2
          }}>
            <Grid item container xs={12}>
              <Grid item xs={4}>
                14.Script
              </Grid>
              <Grid item xs={8}>
                <CallPad></CallPad>
              </Grid>
            </Grid>
            <Grid container item xs={12} className='rounded-lg shadow-lg p-4 border-2'>
              <Typography variant='h6'>SMS TYPING</Typography>
              <Grid container alignItems="center" sx={{
                mb: 2
              }} >
                <Typography variant='body2' component="span">To:</Typography>
                <TextField label="SMS Number" size='small' variant="outlined" />
                <Button variant='contained'>SEND</Button>
              </Grid>
              <TextField
                label="Message"
                variant='outlined'
                multiline
                rows={4}
                maxRows={4} fullWidth />
            </Grid>
            <Grid item container xs={12}>
              <Grid xs={12}>
                <div className='flex flex-col bg-white shadow-xl rounded-md w-full p-4'>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Typography component="span" variant="h6" className="w-1/5">From</Typography>
                      <Typography
                        variant="outlined"
                        className="w-4/5"
                        placeholder="Enter sender's email"
                        size="small"
                      >
                        jonedoe@test.com
                      </Typography>
                    </div>

                    {/* To */}
                    <div className="flex items-center gap-4">
                      <Typography component="span" variant="h6" className="w-1/5">To</Typography>
                      <MultipleSelectChip className="w-4/5" />
                    </div>

                    {/* Subject */}
                    <div className="flex items-center gap-4">
                      <Typography component="span" variant="h6" className="w-1/5">Subject</Typography>
                      <TextField
                        variant="outlined"
                        className="w-4/5"
                        placeholder="Enter subject"
                        size="small"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <EditorWithBottomToolbar />
                    </div>

                    {/* Send Button */}
                    <div className="flex justify-end">
                      <Button variant="contained" color="primary">
                        Send
                      </Button>
                    </div>
                  </div>

                </div>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;