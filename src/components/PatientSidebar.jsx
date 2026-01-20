export default function Sidebar() {
    const styles = {
        sidebar: {
            height: "1024px",
            width: "239px",
            border: "1px solid #E3E3E3",
            display: "flex",
            backgroundColor: "#ffffff",
            flexDirection: "column"
        },
        buttons: {
            width: "100%",
            textAlign: "left",
            fontSize: "15px",
            cursor: "pointer",
            padding: "10px 20px"
        },

        selected: {
            backgroundColor: "#0073E6",
            color: "white"
        },

        logout: {
            margin: "auto"
        }
    };

    return (
        <aside style={styles.sidebar}>
          <button style={styles.buttons}>Dashboard</button>
          <button style={styles.buttons}>New Booking</button>
          <button style={{ ...styles.buttons, ...styles.selected }}>Profile</button>
          <button style={styles.logout}>Logout</button>
        </aside>
      );
    }