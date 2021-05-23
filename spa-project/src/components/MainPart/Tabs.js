import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import EnhancedTableCourses from "./CoursesTable";
import MediaTable from "./MediaTable";
import NotFound from "../NotFound"

const AntTabs = withStyles({
  root: {
    marginTop: "30px",
    borderBottom: "2px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: "#23D7FF;",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#23D7FF;",
      opacity: 1,
    },
    "&$selected": {
      color: "#23D7FF;",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#23D7FF;",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: "#2e1534",
  },
}));

export default function CustomizedTabs() {

  const getTabContent = (value) => {
    if (value === "Courses") {
      return <EnhancedTableCourses/>;
    } 
    if (value === "Social Media") {
      return <MediaTable/>
    } else {
      return <div><NotFound></NotFound></div>
    }
  };

  const classes = useStyles();
  const [value, setValue] = React.useState("Courses");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Courses" value="Courses" />
          <AntTab label="Social Media" value="Social Media" />
          <AntTab label="Youtube" value="Youtube" />
        </AntTabs>
        <Typography className={classes.padding} />
        {getTabContent(value)}
      </div>
    </div>
  );
}
