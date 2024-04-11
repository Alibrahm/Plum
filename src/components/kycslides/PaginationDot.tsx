const styles = {
  root: {
    height: 20,
    width: 20,
    cursor: "pointer",
    border: 0,
    background: "#D9D9D9",
    // padding: 12
  },
  dot: {
    backgroundColor: '#D9D9D9',
    height: 20,
    width: 20,
    borderRadius: "50%",
    border: "1px solid #D9D9D9",
    // margin: `0px 12px`
  },
  active: {
    backgroundColor: "#522080",
    // borderRadius: "30%",

   
  },
};

export function PaginationDot({
  onClick,
  active,
  index
}: {
  active: boolean
  index: number
  onClick: (i: number) => void
}) {
  const handleClick = () => onClick(index)

  let css
  if (active) {
    css = { ...styles.dot, ...styles.active }
  } else {
    css = styles.dot
  }

  return (
    <button
      type="button"
      style={{
        height: 20,
        width: 20,
        cursor: 'pointer',
        border: 0,
        margin: `0px 6px`,
        background: 'none',
        padding: 0
      }}
      onClick={handleClick}
    >
      <div style={css} />
    </button>
  )
}
