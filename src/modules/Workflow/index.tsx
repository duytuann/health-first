import { Col, Row, Spin } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { ReduxStateType } from 'redux/types';
import SearchControl from './components/SearchControl';

interface IWorkflowProps {}

const Workflow: React.FunctionComponent<IWorkflowProps> = props => {
  const { status } = useSelector((state: RootState) => state.workflow);

  return (
    <>
      {status === ReduxStateType.SUBMITTING ? (
        <div className="d-flex justify-content-center">
          <Spin />
        </div>
      ) : (
        <Row>
          <Col span={24}>
            <SearchControl />
          </Col>
        </Row>
      )}
    </>
    // <DragDropContext onDragEnd={this.onDragEnd}>
    //   <Droppable droppableId="droppable">
    //     {(provided, snapshot) => (
    //       <div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
    //         {this.state.items.map((item: any, index: any) => (
    //           <Draggable key={item.id} draggableId={item.id} index={index}>
    //             {(provided, snapshot) => (
    //               <div
    //                 ref={provided.innerRef}
    //                 {...provided.draggableProps}
    //                 {...provided.dragHandleProps}
    //                 style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
    //               >
    //                 {item.content}
    //               </div>
    //             )}
    //           </Draggable>
    //         ))}
    //         {provided.placeholder}
    //       </div>
    //     )}
    //   </Droppable>
    // </DragDropContext>
  );
};

export default Workflow;
