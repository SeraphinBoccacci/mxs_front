import React, { createRef, ReactNode, useCallback, useState } from "react";

import { WidgetsKinds } from "../../../types/overlays";
import { Background, Container, Content, DraggableContent } from "./style";

interface DraggableProps {
  children: ReactNode;
  widgetId: string;
  widgetKind: WidgetsKinds;
  positionData: { offsetTop: number; offsetLeft: number };
  isSelected: boolean;
  selectWidget: (_id: string | undefined) => void;
  onDragEnd: (
    _id: string,
    kind: WidgetsKinds,
    { offsetTop, offsetLeft }: { offsetTop: number; offsetLeft: number }
  ) => void;
}

const Draggable = ({
  children,
  widgetId,
  isSelected,
  selectWidget,
  onDragEnd,
  positionData,
  widgetKind,
}: DraggableProps) => {
  const containerRef = createRef<HTMLDivElement>();
  const ref = createRef<HTMLDivElement>();

  const [isDragging, setIsDragging] = useState(false);
  const [relativePosition, setRelativePosition] =
    useState<{
      elementTop: number;
      elementLeft: number;
      top: number;
      left: number;
      factor: number;
    }>();

  const onDragStart = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      setIsDragging(true);

      const factor = containerRef.current
        ? containerRef.current?.clientWidth /
          containerRef.current?.getBoundingClientRect().width
        : 0;

      setRelativePosition({
        elementTop: ref.current?.offsetTop || 0,
        elementLeft: ref.current?.offsetLeft || 0,
        top: factor * event.pageY,
        left: factor * event.pageX,
        factor,
      });
    },
    [setRelativePosition, setIsDragging, ref, containerRef]
  );

  const handleOnMouseMove = useCallback(
    (event) => {
      if (isDragging && relativePosition) {
        const offsetTopDifference =
          relativePosition.factor * event.pageY - relativePosition.top;
        const offsetLeftDifference =
          relativePosition.factor * event.pageX - relativePosition.left;

        if (ref?.current?.style) {
          ref.current.style.top =
            offsetTopDifference + relativePosition.elementTop + "px";
          ref.current.style.left =
            offsetLeftDifference + relativePosition.elementLeft + "px";
        }
      }
    },
    [isDragging, relativePosition, ref]
  );

  const handleOnDragEnd = useCallback(() => {
    setIsDragging(false);
    setRelativePosition(undefined);

    onDragEnd(widgetId, widgetKind, {
      offsetTop: ref.current?.offsetTop || 0,
      offsetLeft: ref.current?.offsetLeft || 0,
    });
  }, [
    setIsDragging,
    setRelativePosition,
    onDragEnd,
    widgetId,
    ref,
    widgetKind,
  ]);

  return isSelected ? (
    <Container
      ref={containerRef}
      onMouseUp={handleOnDragEnd}
      onMouseMove={handleOnMouseMove}
    >
      <Background
        onClick={() => {
          if (!isDragging) selectWidget(undefined);
        }}
      ></Background>
      <DraggableContent
        ref={ref}
        isDragged={isDragging}
        onMouseDown={onDragStart}
        offsetTop={positionData.offsetTop}
        offsetLeft={positionData.offsetLeft}
      >
        <div>{children}</div>
      </DraggableContent>
    </Container>
  ) : (
    <Content
      offsetTop={positionData.offsetTop}
      offsetLeft={positionData.offsetLeft}
      onClick={() => {
        selectWidget(widgetId);
      }}
    >
      {children}
    </Content>
  );
};

export default Draggable;
