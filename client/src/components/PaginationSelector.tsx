import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";

type Props = {
    page: number;
    totalPage: number;
    onPageChange: (page: number) => void
}
const PaginationSelector = ({ page, totalPage, onPageChange }: Props) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPage; i++) {
        pageNumbers.push(i);
    }
    return (
        <Pagination>
            <PaginationContent>
                {page !== 1 && (
                    <PaginationItem>
                        <PaginationPrevious href="#" onClick={() => onPageChange(page - 1)} />
                    </PaginationItem>
                )}
                {pageNumbers.map((number, index) => (
                    <PaginationItem key={index}>
                        <PaginationLink href="#" onClick={() => onPageChange(number)} isActive={page === number}>{number}</PaginationLink>
                    </PaginationItem>
                ))}
                {page !== pageNumbers.length && (
                    <PaginationItem>
                        <PaginationNext href="#" onClick={() => onPageChange(page + 1)} />
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    )
}

export default PaginationSelector