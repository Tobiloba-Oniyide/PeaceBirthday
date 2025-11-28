function PhotoGallery({ selectedPhoto, setSelectedPhoto }) {
  try {
    const [photos, setPhotos] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [uploading, setUploading] = React.useState(false);

    React.useEffect(() => {
      loadPhotos();
    }, []);

    const loadPhotos = async () => {
      try {
        const result = await trickleListObjects('memory_photo', 100, true);
        setPhotos(result.items || []);
      } catch (error) {
        console.error('Error loading photos:', error);
      } finally {
        setLoading(false);
      }
    };

    const handleUpload = async (event) => {
      const file = event.target.files?.[0];
      if (!file) return;

      // Prevent uploads above 5 images
      if (photos.length >= 5) {
        alert("You can only upload a maximum of 5 photos.");
        event.target.value = ""; 
        return;
      }

      setUploading(true);

      try {
        await trickleUploadObject('memory_photo', file.name, file);

        // Reload list after upload
        await loadPhotos();
      } catch (error) {
        console.error("Upload error:", error);
      } finally {
        setUploading(false);
        event.target.value = "";
      }
    };

    return (
      <section className="mb-16" data-name="photo-gallery" data-file="components/PhotoGallery.js">
        <h3 className="text-4xl font-bold text-gradient text-center mb-8">
          Our Memories 📸
        </h3>

        {/* Upload Box */}
        <div className="bg-white border-4 border-[var(--light-pink)] rounded-3xl p-6 mb-10 text-center">
          <label
            className={`cursor-pointer inline-block px-6 py-3 bg-[var(--magenta)] text-white rounded-2xl font-semibold shadow transition ${
              uploading || photos.length >= 5 ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
            }`}
          >
            {uploading ? "Uploading..." : photos.length >= 5 ? "Upload Limit Reached (5/5)" : "Upload a New Photo"}

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleUpload}
              disabled={uploading || photos.length >= 5}
            />
          </label>

          <p className="mt-2 text-gray-600 text-sm">
            Maximum: 5 photos • JPG, PNG, HEIC supported
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="icon-loader text-4xl text-[var(--magenta)] animate-spin mx-auto"></div>
          </div>
        ) : photos.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border-4 border-[var(--light-pink)]">
            <div className="icon-image text-6xl text-[var(--magenta)] mx-auto mb-4 opacity-50"></div>
            <p className="text-xl text-gray-600">No photos yet. Upload your first memory!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.objectId}
                className="cursor-pointer transform hover:scale-105 transition-all"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.objectData.url}
                  alt={photo.objectData.caption || "Memory"}
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
              </div>
            ))}
          </div>
        )}
      </section>
    );
  } catch (error) {
    console.error('PhotoGallery component error:', error);
    return null;
  }
}