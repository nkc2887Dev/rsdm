import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import { Link } from "react-router-dom";

const BreadcrumbLayout = ({ items }) => (
  <Breadcrumb>
    <BreadcrumbList>
      {items.map((item, index) => (
        <BreadcrumbItem key={index}>
          {item.href ? (
            <BreadcrumbLink asChild>
              <Link to={item.href}>{item.title}</Link>
            </BreadcrumbLink>
          ) : (
            <BreadcrumbPage>{item.title}</BreadcrumbPage>
          )}
          {index < items.length - 1 && <BreadcrumbSeparator />}
        </BreadcrumbItem>
      ))}
    </BreadcrumbList>
  </Breadcrumb>
);

export default BreadcrumbLayout;
