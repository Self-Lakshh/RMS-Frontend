type AxisLabelProps = {
  viewBox?: {
    x: number
    y: number
    width: number
    height: number
  }
  value: string
  color: string
  position: "left" | "right"
}

const AxisLabel = ({ viewBox, value, color, position }: AxisLabelProps) => {
  if (!viewBox) return null

  const cx =
    position === "left"
      ? viewBox.x + 12
      : viewBox.x + viewBox.width - 12

  const cy = viewBox.y + viewBox.height / 2

  return (
    <g
      transform={`translate(${cx}, ${cy}) rotate(${
        position === "left" ? -90 : 90
      })`}
    >
      {/* Colored dot */}
      <circle r={3} fill={color} />

      {/* Label text */}
      <text
        x={8}
        y={4}
        fill={color}
        fontSize={12}
        fontWeight={500}
      >
        {value}
      </text>
    </g>
  )
}

export default AxisLabel
