import { SearchWrapp, Form, Input, IconWrapp } from "./Search.styled";
import { Container } from "../Container/Container.styled";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import { checkIsAuth } from "../../redux/features/auth/authSlice";

const Search = ({ value, onChangeFilter }) => {
  const isAuth = useSelector(checkIsAuth);

  return (
    <>
      {isAuth && (
        <SearchWrapp>
          <Container>
            <Form>
              <Input
                type="text"
                placeholder="Search posts by title ..."
                value={value}
                onChange={(e) => onChangeFilter(e.target.value)}
              />
              <IconWrapp>
                <AiOutlineSearch size={20} />
              </IconWrapp>
            </Form>
          </Container>
        </SearchWrapp>
      )}
    </>
  );
};

export default Search;
