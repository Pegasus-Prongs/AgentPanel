import { Grid, Badge, Button, IconButton, InputAdornment, TextField, Typography, Container } from '@mui/material';
import { NotificationAddOutlined, SearchOutlined, LogoutOutlined } from '@mui/icons-material';

function App() {
  return (
    <Container maxWidth="xl">
      <Grid container>
        {/* Image Section */}
        <Grid item xs={12}>
          <img alt="Example" />
        </Grid>

        {/* Top Bar */}
        <Grid container item xs={12} spacing={2} sx={{ py: 2 }}>
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
        <Grid container columns={16} spacing={2}>
          {/* Vertical Button List */}
          <Grid container item xs={2}>
            <div className="flex flex-col gap-2">
              <Button variant="contained">SMS</Button>
              <Button variant="contained">Email</Button>
              <Button variant="contained">My Callback</Button>
              <Button variant="contained">Notes</Button>
              <Button variant="contained">Task</Button>
              <Button variant="contained">View agents online</Button>
              <Button variant="contained">Chat</Button>
            </div>
          </Grid>

          {/* Information & Activity Section */}
          <Grid item xs={5} sx={{ mt: 2, mb: 2, gap: 2 }}>
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
          </Grid>
          <Grid item container xs={8} columns={12}>
              <Grid item container xs={12}>
                <Grid item xs={4}>
                  14.Script
                </Grid>
                <Grid item xs={8}
                ></Grid>
              </Grid>
              <Grid item xs={12}>
                
              </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;