import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbSection({FirstBredItem,SecondBredItem,ThirdBredItem,ActiveBredItem}) {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="#">{FirstBredItem}</Breadcrumb.Item>
            <Breadcrumb.Item href="#">
                {SecondBredItem}
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">
                {ThirdBredItem}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{ActiveBredItem}</Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default BreadcrumbSection;