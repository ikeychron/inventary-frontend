import palette from "./palette";

export default {
  MuiButton: {
    root: {
      borderRadius: 8,

      "&:hover": {
        backgroundColor: "transparent"
      }
    },
    /* contained: {
      boxShadow: 'none',

      '&:hover': {
        boxShadow: 'none'
      },
      '&:active': {
        boxShadow: 'none '
      }
    }, */
    label: {
      textTransform: "inherit"
    }
  },
  MuiTab: {
    root: {
      minWidth: "max-content !important"
    }
  },
  MuiDialog: {
    paperWidthXs: {
      maxWidth: 350
    }
  },
  MuiInputBase: {
    input: {
      //color: palette.text.white
    }
  },
  MuiInput: {
    underline: {
      "&:hover:not(.Mui-disabled):before": {
        borderBottom: `1px solid ${palette.primary.light}`
      }
    }
  }
};
