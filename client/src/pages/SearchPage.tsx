import { useSearchRestaurants } from "@/api/RestaurantApi";
import CuisineFilter from "@/components/CuisineFilter";
import Loading from "@/components/Loading";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import SortOptionDropdown from "@/components/SortOptionDropdown";
import { useState } from "react";
import { useParams } from "react-router-dom"

export type SearchState = {
    searchQuery: string;
    page: number;
    selectedCuisines: string[];
    sortOption: string;
};

const SearchPage = () => {
    const { city } = useParams();
    const [searchState, setSearchState] = useState<SearchState>({
        searchQuery: "",
        page: 1,
        selectedCuisines: [],
        sortOption: "bestMatch",
    });
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    // query search after submit search bar with city
    const { results, isLoading } = useSearchRestaurants(searchState, city);

    const setSearchQuery = (searchFormData: SearchForm) => {
        setSearchState((prevState) => ({
            ...prevState,
            searchQuery: searchFormData.searchQuery,
            page: 1,
        }))
    }

    const setSortOption = (sortOption: string) => {
        setSearchState((prevState) => ({
            ...prevState,
            sortOption,
            page: 1,
        }));
    };

    const setSelectedCuisines = (selectedCuisines: string[]) => {
        setSearchState((prevState) => ({
            ...prevState,
            selectedCuisines,
            page: 1,
        }));
    };

    const resetSearch = () => {
        setSearchState((prevState) => ({
            ...prevState,
            searchQuery: "",
            page: 1,
        }))
    }

    const setPage = (page: number) => {
        setSearchState((prevState) => ({
            ...prevState,
            page: page
        }))
    }

    if (!results?.data || !city) {
        return <span>No results found</span>
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
            <div id="cuisines-list">
                <CuisineFilter onChange={setSelectedCuisines} selectedCuisines={searchState.selectedCuisines} isExpanded={isExpanded} onExpandedClick={() => setIsExpanded((prev) => !prev)} />
            </div>
            <div className="flex flex-col gap-5">
                <SearchBar onSubmit={setSearchQuery} placeHolder="Search by Cuisine or Restaurant Name" onReset={resetSearch} searchQuery={searchState.searchQuery} />
                <div className="flex justify-between flex-col gap-3 lg:flex-row">
                    <SearchResultInfo total={results.pagination.total} city={city} />
                    <SortOptionDropdown sortOption={searchState.sortOption} onChange={(value) => setSortOption(value)} />
                </div>
                {
                    results.data.map((result, index) => (
                        <SearchResultCard key={index} restaurant={result} />
                    ))
                }
                <PaginationSelector page={results.pagination.page} totalPage={results.pagination.pages} onPageChange={setPage} />
            </div>
        </div>
    )
}

export default SearchPage