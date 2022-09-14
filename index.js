function setPoint(x, y) {
  return { type: "Point", x, y };
}
console.log(setPoint(2, 3));

function setSegment(firstPoint, secondPoint) {
  if (firstPoint.x === secondPoint.x && firstPoint.y === secondPoint.y) {
    console.error("length is null");
  } else {
    return {
      type: "Segment",
      firstPoint,
      secondPoint,
      length: Math.sqrt(
        (firstPoint.x - secondPoint.x) ** 2 +
          (firstPoint.y - secondPoint.y) ** 2
      ).toFixed(3),
    };
  }
}
console.log(setSegment({ x: 2, y: 3 }, { x: 5, y: 3 }));

function SetCircleTwoPoints(firstPoint, secondPoint) {
  if (firstPoint.x === secondPoint.x && firstPoint.y === secondPoint.y) {
    console.error("area is null");
  } else {
    const radius = Math.sqrt(
      (firstPoint.x - secondPoint.x) ** 2 + (firstPoint.y - secondPoint.y) ** 2
    ).toFixed(3);

    return {
      type: "Circle",
      firstPoint,
      secondPoint,
      radius: radius,
      area: (Math.PI * radius ** 2).toFixed(3),
      length: (2 * Math.PI * radius).toFixed(3),
    };
  }
}
console.log(SetCircleTwoPoints({ x: 0, y: 0 }, { x: 3, y: 0 }));

function SetCircleRadius(radius) {
  return {
    type: "Circle",
    radius,
    area: (Math.PI * radius ** 2).toFixed(3),
    length: (2 * Math.PI * radius).toFixed(3),
  };
}
console.log(SetCircleRadius(3));
function SetCircleLength(length) {
  return {
    type: "Circle",
    length,
    area: (length ** 2 / (4 * Math.PI)).toFixed(3),
    radius: (length / (2 * Math.PI)).toFixed(3),
  };
}
console.log(SetCircleLength(18.85));
function SetRectangleTwoPoints(firstPoint, secondPoint) {
  if (firstPoint.x === secondPoint.x || firstPoint.y === secondPoint.y) {
    console.error("area is null");
  } else {
    const width = Math.abs(firstPoint.x - secondPoint.x);
    const height = Math.abs(firstPoint.y - secondPoint.y);
    return {
      type: "Rectangle",
      firstPoint,
      secondPoint,
      width: width,
      height: height,
      area: (width * height).toFixed(3),
      perimeter: ((width + height) * 2).toFixed(3),
    };
  }
}
console.log(SetRectangleTwoPoints({ x: 0, y: 0 }, { x: 2, y: 2 }));

function isPositiveNumbers(...args) {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] <= 0 || typeof arguments[i] !== "number") {
      return false;
    }
  }
  return true;
}
function SetRectangleWidthAndHeight(width, height) {
  if (!isPositiveNumbers(width, height)) {
    console.log("enter two positive numder");
  } else {
    return {
      type: "Rectangle",
      width,
      height,
      area: (width * height).toFixed(3),
      perimeter: ((width + height) * 2).toFixed(3),
    };
  }
}
console.log(SetRectangleWidthAndHeight(2, 2));

function setTriangleSides(firstSide, secondSide, thirdSide) {
  if (!isPositiveNumbers(firstSide, secondSide, thirdSide)) {
    console.log("enter three positive numder");
  } else {
    const halfOfPerimetr = ((firstSide + secondSide + thirdSide) / 2).toFixed(
      3
    );
    const area = Math.sqrt(
      halfOfPerimetr *
        (halfOfPerimetr - firstSide) *
        (halfOfPerimetr - secondSide) *
        (halfOfPerimetr - thirdSide)
    ).toFixed(3);
    const perimeter = (halfOfPerimetr * 2).toFixed(3);
    return {
      type: "Triangle",
      sides: firstSide,
      secondSide,
      thirdSide,
      area: area,
      perimeter: perimeter,
    };
  }
}
console.log(setTriangleSides(3, 4, 5));

function setRegularPolygonParameters(sideLength, sidesQuantity) {
  if (!isPositiveNumbers(sideLength, sidesQuantity)) {
    console.error("Error: pls enter two positive number");
  } else {
    const perimeter = (sideLength * sidesQuantity).toFixed(3);
    const area = (
      (sideLength ** 2 * sidesQuantity) /
      (4 * Math.tan(Math.PI / sidesQuantity))
    ).toFixed(3);
    return {
      type: "RegularPolygon",
      sideLength,
      sidesQuantity,
      perimeter: perimeter,
      area: area,
    };
  }
}
console.log(setRegularPolygonParameters(2, 6));

function set3dPoint(x, y, z) {
  return {
    type: "3dPoint",
    position: [x, y, z],
  };
}
console.log(set3dPoint(1, 2, 3));

function set3DSegment(point1, point2) {
  return {
    point1,
    point2,
    segmentLength: Math.sqrt(
      (point2.position[0] - point1.position[0]) ** 2 +
        (point2.position[1] - point1.position[1]) ** 2 +
        (point2.position[2] - point1.position[2]) ** 2
    ).toFixed(3),
  };
}
const point1 = set3dPoint(1, 2, 3);
const point2 = set3dPoint(2, 3, 4);
console.log(set3DSegment(point1, point2));
