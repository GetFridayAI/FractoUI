import ButtonPage from './ButtonPage';
import DropdownPage from './DropdownPage';
import SearchPage from './InputFields/SearchPage';
import TextFieldPage from './InputFields/TextFieldPage';
import "./less/gallery.less";

const Gallery = () => {
    return (
        <div className="dashboard">
            <ButtonPage />
            <DropdownPage />
            <SearchPage />
            <TextFieldPage />
        </div>
    );
};

export default Gallery;